/* ===== APPLICATION STATE & LOCAL STORAGE ===== */
var progress = {};
var answered = {};
var bookmarks = {};
var navStack = ['home'];
var transitioning = false;
var curCourse = null;
var curTrack = null;
var curTopic = null;

// Initialize state
function loadState() {
  try { progress = JSON.parse(localStorage.getItem('om_prog') || '{}'); } catch(e) { progress = {}; }
  try { answered = JSON.parse(localStorage.getItem('om_ans') || '{}'); } catch(e) { answered = {}; }
  try { bookmarks = JSON.parse(localStorage.getItem('om_bkm') || '{}'); } catch(e) { bookmarks = {}; }
}

function saveState() {
  try {
    localStorage.setItem('om_prog', JSON.stringify(progress));
    localStorage.setItem('om_ans', JSON.stringify(answered));
    localStorage.setItem('om_bkm', JSON.stringify(bookmarks));
  } catch(e) {
    console.error("Failed to save state to localStorage", e);
  }
}

function tKey(cid, tid) { return cid + '_' + tid; }
function isCompleted(cid, tid) { return !!progress[tKey(cid, tid)]; }

// Compute course metrics
function getCourseMetrics(courseObj) {
  var total = 0, done = 0;
  courseObj.tracks.forEach(function(tr) {
    tr.topics.forEach(function(tp) {
      total++;
      if (isCompleted(courseObj.id, tp.id)) done++;
    });
  });
  return { total: total, done: done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getTrackMetrics(cid, trackObj) {
  var total = trackObj.topics.length, done = 0;
  trackObj.topics.forEach(function(tp) {
    if (isCompleted(cid, tp.id)) done++;
  });
  return { total: total, done: done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getGlobalCompletion() {
  var total = 0, done = 0;
  [APT, REA, ENG].forEach(function(course) {
    course.tracks.forEach(function(tr) {
      tr.topics.forEach(function(tp) {
        total++;
        if (isCompleted(course.id, tp.id)) done++;
      });
    });
  });
  return { total: total, done: done, pct: total ? Math.round((done / total) * 100) : 0 };
}

// Toast alerts helper
function showToast(text, isError) {
  var toast = document.getElementById('toast');
  var toastTxt = document.getElementById('toastTxt');
  var toastIcon = document.getElementById('toastIcon');
  
  toastTxt.innerText = text;
  if (isError) {
    toast.className = 'toast show error';
    toastIcon.className = 'fas fa-exclamation-circle';
  } else {
    toast.className = 'toast show success';
    toastIcon.className = 'fas fa-check-circle';
  }
  
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
}

/* ===== NAVIGATION CONTROLLER ===== */
function navigate(view, param) {
  if (transitioning) return;
  transitioning = true;

  // Active state links in navigation bar
  var navHome = document.getElementById('navLinkHome');
  var navAnal = document.getElementById('navLinkAnalytics');
  if (navHome && navAnal) {
    navHome.classList.remove('active');
    navAnal.classList.remove('active');
    if (view === 'home') navHome.classList.add('active');
    if (view === 'analytics') navAnal.classList.add('active');
  }

  var panels = document.querySelectorAll('.view-panel');
  panels.forEach(function(p) { p.classList.remove('is-visible'); });

  setTimeout(function() {
    // Populate the view contents
    if (view === 'home') {
      buildHome();
    } else if (view === 'course') {
      buildCourse(param);
    } else if (view === 'track') {
      buildTrack(param);
    } else if (view === 'topic') {
      buildTopic(param);
    } else if (view === 'analytics') {
      buildAnalytics();
    }

    var target = document.getElementById('view' + view.charAt(0).toUpperCase() + view.slice(1));
    if (target) {
      target.classList.add('is-visible');
    }

    if (navStack[navStack.length - 1] !== view) {
      navStack.push(view);
    }
    
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(function() { transitioning = false; }, 300);
  }, 200);
}

// Go back one view
function goBack() {
  if (transitioning || navStack.length <= 1) return;
  navStack.pop();
  var prev = navStack[navStack.length - 1];
  
  // Trick stack tracking
  navStack.pop(); // Pop temporarily so navigate pushes it back
  navigate(prev, prev === 'course' ? curCourse.id : (prev === 'track' ? curTrack.id : null));
}

// Initialize navigation anchors
window.addEventListener('popstate', function() {
  goBack();
});

/* ===== BUILDERS FOR APP VIEWS ===== */

// Build Home view
function buildHome() {
  loadState();
  
  // Calculate completion metrics
  var aptM = getCourseMetrics(APT);
  var reaM = getCourseMetrics(REA);
  var engM = getCourseMetrics(ENG);
  var globM = getGlobalCompletion();

  // Progress fills
  var aptBar = document.getElementById('aptHomeProg');
  var aptTxt = document.getElementById('aptHomeTxt');
  var reaBar = document.getElementById('reaHomeProg');
  var reaTxt = document.getElementById('reaHomeTxt');
  var engBar = document.getElementById('engHomeProg');
  var engTxt = document.getElementById('engHomeTxt');
  var navText = document.getElementById('navProgressText');

  if (aptBar && aptTxt) {
    aptBar.style.width = aptM.pct + '%';
    aptTxt.innerText = aptM.done + ' of ' + aptM.total + ' topics completed (' + aptM.pct + '%)';
  }
  if (reaBar && reaTxt) {
    reaBar.style.width = reaM.pct + '%';
    reaTxt.innerText = reaM.done + ' of ' + reaM.total + ' chapters completed (' + reaM.pct + '%)';
  }
  if (engBar && engTxt) {
    engBar.style.width = engM.pct + '%';
    engTxt.innerText = engM.done + ' of ' + engM.total + ' topics completed (' + engM.pct + '%)';
  }
  if (navText) {
    navText.innerText = globM.pct + '% Complete';
  }

  // Bookmarks panel
  buildBookmarksHome();
  
  // Trigger counters
  initCounters();
}

// Build Course details view
function buildCourse(courseId) {
  var course = (courseId === 'aptitude') ? APT : (courseId === 'reasoning' ? REA : ENG);
  curCourse = course;
  
  var metrics = getCourseMetrics(course);
  
  document.getElementById('courseTitle').innerText = course.title;
  document.getElementById('courseSubtitle').innerText = course.subtitle;
  
  var iconDiv = document.getElementById('courseIcon');
  iconDiv.style.backgroundColor = course.dim;
  iconDiv.innerHTML = '<i class="fas ' + course.icon + ' text-xl" style="color:' + course.color + '"></i>';

  document.getElementById('courseProg').style.width = metrics.pct + '%';
  document.getElementById('courseProgTxt').innerText = metrics.done + ' of ' + metrics.total + ' completed (' + metrics.pct + '%)';

  // Build grid of tracks
  var tracksGrid = document.getElementById('tracksGrid');
  tracksGrid.innerHTML = '';
  
  course.tracks.forEach(function(tr) {
    var trM = getTrackMetrics(course.id, tr);
    
    var card = document.createElement('div');
    card.className = 'track-card';
    card.style.setProperty('--track-accent', course.color);
    card.style.setProperty('--track-shadow', tr.shadow);
    card.onclick = function() { navigate('track', tr.id); };
    
    card.innerHTML = 
      '<div class="track-number">' + String(tr.num).padStart(2, '0') + '</div>' +
      '<h3 class="text-lg font-bold text-gray-100 mb-1" style="font-family:\'Space Grotesk\'">' + tr.name + '</h3>' +
      '<p class="text-xs text-gray-400 mb-4 leading-normal max-w-xs">' + tr.desc + '</p>' +
      '<div class="flex justify-between items-center text-xs mb-1.5" style="color:var(--fg-secondary)">' +
        '<span>Progress</span>' +
        '<span class="font-semibold">' + trM.done + '/' + trM.total + ' topics</span>' +
      '</div>' +
      '<div class="progress-bar"><div class="progress-fill" style="width:' + trM.pct + '%; background:' + course.color + '"></div></div>';
      
    tracksGrid.appendChild(card);
  });
}

// Helper to look up Course and Track by trackId
function findCourseAndTrackByTrackId(trackId) {
  var foundCourse = null;
  var foundTrack = null;
  [APT, REA, ENG].forEach(function(c) {
    var t = c.tracks.find(function(track) { return track.id === trackId; });
    if (t) {
      foundCourse = c;
      foundTrack = t;
    }
  });
  return { course: foundCourse, track: foundTrack };
}

// Helper to look up Course, Track, and Topic by topicId
function findCourseTrackAndTopicByTopicId(topicId) {
  var foundCourse = null;
  var foundTrack = null;
  var foundTopic = null;
  [APT, REA, ENG].forEach(function(c) {
    c.tracks.forEach(function(t) {
      var tp = t.topics.find(function(topic) { return topic.id === topicId; });
      if (tp) {
        foundCourse = c;
        foundTrack = t;
        foundTopic = tp;
      }
    });
  });
  return { course: foundCourse, track: foundTrack, topic: foundTopic };
}

// Build Track details view
function buildTrack(trackId) {
  var resolved = findCourseAndTrackByTrackId(trackId);
  var course = resolved.course || APT;
  var track = resolved.track || course.tracks[0];
  
  curCourse = course;
  curTrack = track;
  
  var trM = getTrackMetrics(course.id, track);
  
  // Set back button text
  document.getElementById('trackBackTxt').innerText = 'Back to ' + course.title;
  var backBtn = document.getElementById('trackBackBtn');
  backBtn.onclick = function() { navigate('course', course.id); };
  
  var badge = document.getElementById('trackBadge');
  badge.innerText = 'Track ' + String(track.num).padStart(2, '0');
  badge.style.backgroundColor = course.dim;
  badge.style.color = course.color;
  badge.style.borderColor = course.color + '50';
  
  document.getElementById('trackCount').innerText = track.topics.length + ' Topics';
  document.getElementById('trackTitle').innerText = track.name;
  document.getElementById('trackDesc').innerText = track.desc;
  
  var trackProg = document.getElementById('trackProg');
  trackProg.style.width = trM.pct + '%';
  trackProg.style.background = course.color;
  
  // Build topic list
  var list = document.getElementById('topicsList');
  list.innerHTML = '';
  
  track.topics.forEach(function(tp) {
    var completed = isCompleted(course.id, tp.id);
    
    var card = document.createElement('div');
    card.className = 'topic-card' + (completed ? ' completed' : '');
    card.style.setProperty('--topic-accent', course.color);
    card.onclick = function() { navigate('topic', tp.id); };
    
    var iconHTML = completed 
      ? '<i class="fas fa-check-circle text-lg topic-status-icon"></i>'
      : '<i class="far fa-circle text-lg topic-status-icon" style="color:var(--muted)"></i>';
      
    card.innerHTML = 
      '<div class="flex-shrink-0">' + iconHTML + '</div>' +
      '<div class="flex-grow">' +
        '<h4 class="text-sm font-semibold text-gray-200">' + tp.name + '</h4>' +
        '<p class="text-xs text-gray-500 mt-0.5">' + tp.sub + '</p>' +
      '</div>' +
      '<div class="flex-shrink-0"><i class="fas fa-chevron-right text-xs text-gray-600"></i></div>';
      
    list.appendChild(card);
  });
}

// Build Topic study view
function buildTopic(topicId) {
  var resolved = findCourseTrackAndTopicByTopicId(topicId);
  var course = resolved.course || APT;
  var track = resolved.track || course.tracks[0];
  var topic = resolved.topic || track.topics[0];
  
  curCourse = course;
  curTrack = track;
  curTopic = topic;
  
  // Set back button
  document.getElementById('topicBackTxt').innerText = 'Back to ' + track.name;
  document.getElementById('topicBackBtn').onclick = function() { navigate('track', track.id); };
  
  // Set headers
  var badge = document.getElementById('topicTrackBadge');
  badge.innerText = track.name;
  badge.style.backgroundColor = course.dim;
  badge.style.color = course.color;
  badge.style.borderColor = course.color + '30';
  
  document.getElementById('topicTitle').innerText = topic.name;
  document.getElementById('topicSub').innerText = topic.sub;
  
  // Update bookmark button status
  updateBookmarkBtnState(topic.id);
  
  // Render lesson contents & practice MCQs
  var contentArea = document.getElementById('topicContent');
  var quizArea = document.getElementById('quizContainer');
  contentArea.innerHTML = '';
  quizArea.innerHTML = '';
  
  var dbTopic = CONTENT[topic.id];
  
  if (dbTopic) {
    dbTopic.sections.forEach(function(sec, sIndex) {
      if (sec.type === 'concept') {
        var card = document.createElement('div');
        card.className = 'teaching-section mb-6';
        card.innerHTML = '<h3 class="text-md font-bold mb-3"><i class="fas fa-book-open text-amber-500 mr-2"></i>' + sec.title + '</h3>' + sec.html;
        contentArea.appendChild(card);
      } else if (sec.type === 'formula') {
        var card = document.createElement('div');
        card.className = 'teaching-section mb-6';
        card.innerHTML = '<h3 class="text-md font-bold mb-2"><i class="fas fa-calculator text-emerald-400 mr-2"></i>' + sec.title + '</h3>' + sec.html;
        contentArea.appendChild(card);
      } else if (sec.type === 'mcq') {
        // Render Solved Examples from examples.js right before the practice quiz
        var topicExamples = typeof EXAMPLES !== 'undefined' ? EXAMPLES[topic.id] : null;
        if (topicExamples && topicExamples.length > 0) {
          var exCard = document.createElement('div');
          exCard.className = 'teaching-section mb-6';
          
          var exHTML = '<h3 class="text-md font-bold mb-4 text-purple-400" style="font-family:\'Space Grotesk\';"><i class="fas fa-tasks mr-2 text-purple-400"></i>Solved Practice Examples</h3>';
          exHTML += '<div style="display:flex; flex-direction:column; gap:1rem;">';
          topicExamples.forEach(function(ex, eIdx) {
            exHTML += 
              '<div style="padding:1rem; border-radius:10px; border:1px solid var(--border); background:rgba(255,255,255,0.015);">' +
                '<strong class="text-xs text-amber-500 block mb-1">Example ' + (eIdx + 1) + ':</strong>' +
                '<p class="text-sm text-gray-200 mb-3 font-medium">' + ex.q + '</p>' +
                '<div style="padding-left:0.75rem; border-left:2px solid var(--success); font-size:0.82rem; color:var(--fg-secondary); line-height:1.6; white-space:pre-wrap;">' +
                  '<strong class="text-green-400 block mb-1" style="font-size:0.75rem; font-weight:700;"><i class="fas fa-check-circle mr-1"></i>Step-by-step Solution:</strong>' + ex.a +
                '</div>' +
              '</div>';
          });
          exHTML += '</div>';
          
          exCard.innerHTML = exHTML;
          contentArea.appendChild(exCard);
        }

        // Build practice interactive quiz
        buildQuiz(sec.questions, topic.id);
      }
    });
  } else {
    // Fallback if content data is missing or loading
    contentArea.innerHTML = '<div class="teaching-section"><p class="text-gray-400">Section details and formula guides are loading...</p></div>';
  }
  
  // Set "Mark Complete" button
  updateMarkBtnState();
}

// Build Quiz interface
function buildQuiz(questions, topicId) {
  var quizArea = document.getElementById('quizContainer');
  
  var heading = document.createElement('h3');
  heading.className = 'text-lg font-bold mb-4 mt-8 flex items-center gap-2';
  heading.innerHTML = '<i class="fas fa-question-circle text-amber-500"></i> Practice — Exam Pattern MCQs';
  quizArea.appendChild(heading);

  questions.forEach(function(qObj, qIndex) {
    var ansKey = topicId + '_' + qIndex;
    var state = answered[ansKey]; // contains {selected: index, correct: bool}
    
    var quizCard = document.createElement('div');
    quizCard.className = 'quiz-card';
    
    // Exam badge
    var badgeHTML = qObj.exam ? '<span class="badge mb-3" style="background:rgba(255,255,255,0.04); color:var(--fg-secondary); border-color:var(--border)">' + qObj.exam + '</span>' : '';
    
    var optionsHTML = '';
    qObj.opts.forEach(function(opt, oIdx) {
      var letter = String.fromCharCode(65 + oIdx); // A, B, C, D
      var optClass = 'mcq-option';
      
      if (state) {
        optClass += ' locked';
        if (oIdx === qObj.ans) {
          optClass += ' correct';
        } else if (state.selected === oIdx) {
          optClass += ' wrong';
        }
      }
      
      optionsHTML += 
        '<div class="' + optClass + '" onclick="selectOption(' + qIndex + ',' + oIdx + ',\'' + topicId + '\')">' +
          '<div class="opt-letter">' + letter + '</div>' +
          '<span class="text-sm text-gray-300">' + opt + '</span>' +
        '</div>';
    });

    var solutionHTML = 
      '<div class="solution-panel" id="sol_' + qIndex + '"' + (state ? ' style="display:block;"' : '') + '>' +
        '<strong class="text-emerald-400 text-xs block mb-1"><i class="fas fa-lightbulb mr-1"></i>Solution Explanation:</strong>' +
        '<p style="white-space: pre-wrap;">' + qObj.sol + '</p>' +
      '</div>';

    quizCard.innerHTML = 
      badgeHTML +
      '<p class="text-sm font-medium text-gray-100 mb-4">' + (qIndex + 1) + '. ' + qObj.q + '</p>' +
      '<div class="mb-4">' + optionsHTML + '</div>' +
      solutionHTML;
      
    quizArea.appendChild(quizCard);
  });
}

// Handle option click selection
function selectOption(qIdx, oIdx, topicId) {
  var ansKey = topicId + '_' + qIdx;
  if (answered[ansKey]) return; // locked
  
  var dbTopic = CONTENT[topicId];
  var qSection = dbTopic.sections.find(function(s) { return s.type === 'mcq'; });
  var qObj = qSection.questions[qIdx];
  
  var isCorrect = (oIdx === qObj.ans);
  answered[ansKey] = { selected: oIdx, correct: isCorrect };
  
  saveState();
  
  // Re-build this topic's view to apply correct/wrong states instantly
  buildTopic(topicId);
  
  // Reveal toast feedback
  if (isCorrect) {
    showToast("Correct Answer!", false);
  } else {
    showToast("Incorrect, try reading the solution.", true);
  }
}

// Toggle Complete state on current topic
function toggleCompleteCurrent() {
  if (!curCourse || !curTopic) return;
  var key = tKey(curCourse.id, curTopic.id);
  
  if (progress[key]) {
    delete progress[key];
    showToast("Marked as Incomplete", true);
  } else {
    progress[key] = true;
    showToast("Topic Completed!", false);
  }
  
  saveState();
  updateMarkBtnState();
}

function updateMarkBtnState() {
  var markBtn = document.getElementById('markBtn');
  if (!markBtn || !curCourse || !curTopic) return;
  
  var key = tKey(curCourse.id, curTopic.id);
  var completed = !!progress[key];
  
  if (completed) {
    markBtn.className = 'mark-complete-btn done';
    markBtn.innerHTML = '<i class="fas fa-check"></i> Completed';
  } else {
    markBtn.className = 'mark-complete-btn ready';
    markBtn.innerHTML = '<i class="fas fa-circle-check"></i> Mark Complete';
  }
}

/* ===== BOOKMARKING SYSTEM ===== */
function toggleBookmarkCurrent() {
  if (!curTopic) return;
  var tid = curTopic.id;
  
  if (bookmarks[tid]) {
    delete bookmarks[tid];
    showToast("Removed from bookmarks", true);
  } else {
    bookmarks[tid] = true;
    showToast("Added to bookmarks", false);
  }
  
  saveState();
  updateBookmarkBtnState(tid);
}

function updateBookmarkBtnState(tid) {
  var btn = document.getElementById('topicBookmarkBtn');
  if (!btn) return;
  
  if (bookmarks[tid]) {
    btn.className = 'bookmark-btn active';
    btn.innerHTML = '<i class="fas fa-star text-lg"></i>';
  } else {
    btn.className = 'bookmark-btn';
    btn.innerHTML = '<i class="far fa-star text-lg"></i>';
  }
}

// Build Bookmarks Grid on Home View
function buildBookmarksHome() {
  var section = document.getElementById('bookmarksSection');
  var grid = document.getElementById('bookmarksGrid');
  if (!section || !grid) return;
  
  var activeIds = Object.keys(bookmarks);
  
  if (activeIds.length === 0) {
    section.classList.add('hidden');
    return;
  }
  
  section.classList.remove('hidden');
  grid.innerHTML = '';
  
  activeIds.forEach(function(tid) {
    // Lookup topic details in syllabus datasets
    var topicMeta = null;
    var courseId = null;
    
    // Scan APT
    APT.tracks.forEach(function(tr) {
      var found = tr.topics.find(function(t) { return t.id === tid; });
      if (found) { topicMeta = found; courseId = 'aptitude'; }
    });
    
    // Scan REA if not found
    if (!topicMeta) {
      REA.tracks.forEach(function(tr) {
        var found = tr.topics.find(function(t) { return t.id === tid; });
        if (found) { topicMeta = found; courseId = 'reasoning'; }
      });
    }

    // Scan ENG if not found
    if (!topicMeta) {
      ENG.tracks.forEach(function(tr) {
        var found = tr.topics.find(function(t) { return t.id === tid; });
        if (found) { topicMeta = found; courseId = 'english'; }
      });
    }
    
    if (topicMeta) {
      var card = document.createElement('div');
      card.className = 'bookmark-card';
      card.onclick = function() {
        curCourse = (courseId === 'aptitude') ? APT : (courseId === 'reasoning' ? REA : ENG);
        navigate('topic', tid);
      };
      
      var courseBadge = courseId === 'aptitude' 
        ? '<span class="badge text-amber-500" style="background:var(--accent-dim); font-size:0.6rem">Aptitude</span>'
        : (courseId === 'reasoning' 
           ? '<span class="badge text-emerald-400" style="background:var(--accent2-dim); font-size:0.6rem">Reasoning</span>'
           : '<span class="badge text-purple-400" style="background:rgba(168,85,247,0.08); font-size:0.6rem">English</span>');
        
      card.innerHTML = 
        '<div>' +
          '<h4 class="text-xs font-semibold text-gray-200">' + topicMeta.name + '</h4>' +
          '<div class="mt-1.5">' + courseBadge + '</div>' +
        '</div>' +
        '<i class="fas fa-chevron-right text-xs text-gray-600"></i>';
        
      grid.appendChild(card);
    }
  });
}

/* ===== ANALYTICS DASHBOARD ENGINE ===== */
function buildAnalytics() {
  loadState();
  
  var globM = getGlobalCompletion();
  var aptM = getCourseMetrics(APT);
  var reaM = getCourseMetrics(REA);
  var engM = getCourseMetrics(ENG);

  // Radial Ring update
  var radialRing = document.getElementById('radialProgress');
  var percentText = document.getElementById('radialPercentText');
  var statsText = document.getElementById('overallStatsText');
  
  if (radialRing && percentText && statsText) {
    percentText.innerText = globM.pct + '%';
    statsText.innerText = globM.done + ' of ' + globM.total + ' topics completed';
    
    // Stroke calculation (circle radius is 38, perimeter is 2 * PI * 38 = 238.76)
    var perimeter = 238.76;
    var offset = perimeter - (globM.pct / 100) * perimeter;
    radialRing.style.strokeDashoffset = offset;
  }

  // Fill divisions ratio
  document.getElementById('analyticsAptRatio').innerText = aptM.done + '/' + aptM.total;
  document.getElementById('analyticsAptBar').style.width = aptM.pct + '%';
  document.getElementById('analyticsReaRatio').innerText = reaM.done + '/' + reaM.total;
  document.getElementById('analyticsReBar').style.width = reaM.pct + '%';
  document.getElementById('analyticsEngRatio').innerText = engM.done + '/' + engM.total;
  document.getElementById('analyticsEngBar').style.width = engM.pct + '%';

  // Quiz details analysis
  var answeredKeys = Object.keys(answered);
  var totalAnswered = answeredKeys.length;
  var correctCount = 0;
  
  answeredKeys.forEach(function(k) {
    if (answered[k].correct) correctCount++;
  });
  
  var accuracy = totalAnswered ? Math.round((correctCount / totalAnswered) * 100) : 0;
  
  document.getElementById('analyticsQuestionsCount').innerText = totalAnswered;
  document.getElementById('analyticsCorrectCount').innerText = correctCount;
  document.getElementById('analyticsAccuracyText').innerText = accuracy + '%';
}

/* ===== DATA BACKUP OPERATIONS ===== */
function exportProgress() {
  var backup = {
    progress: progress,
    answered: answered,
    bookmarks: bookmarks
  };
  
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup));
  var dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "openmind_progress_backup.json");
  dlAnchorElem.click();
  showToast("Progress backup downloaded!", false);
}

function triggerImport() {
  document.getElementById('importFile').click();
}

function importProgress(event) {
  var file = event.target.files[0];
  if (!file) return;
  
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (data.progress || data.answered || data.bookmarks) {
        progress = data.progress || {};
        answered = data.answered || {};
        bookmarks = data.bookmarks || {};
        saveState();
        showToast("Progress successfully imported!", false);
        
        // Refresh active view
        var currentView = navStack[navStack.length - 1];
        navigate(currentView);
      } else {
        showToast("Invalid backup file structure", true);
      }
    } catch(err) {
      showToast("Error parsing backup data", true);
    }
  };
  reader.readAsText(file);
}

function resetProgress() {
  if (confirm("Are you sure you want to delete all study history, completed topics, and quiz answers? This cannot be undone.")) {
    progress = {};
    answered = {};
    bookmarks = {};
    saveState();
    showToast("Study progress cleared!", true);
    
    // Redirect to home
    navStack = ['home'];
    navigate('home');
  }
}

/* ===== GLOBAL SEARCH SYSTEM ===== */
var searchIndex = [];

function buildSearchIndex() {
  searchIndex = [];
  
  // Index APT
  APT.tracks.forEach(function(tr) {
    tr.topics.forEach(function(tp) {
      searchIndex.push({
        id: tp.id,
        name: tp.name,
        sub: tp.sub,
        courseId: 'aptitude',
        trackId: tr.id
      });
    });
  });
  
  // Index REA
  REA.tracks.forEach(function(tr) {
    tr.topics.forEach(function(tp) {
      searchIndex.push({
        id: tp.id,
        name: tp.name,
        sub: tp.sub,
        courseId: 'reasoning',
        trackId: tr.id
      });
    });
  });

  // Index ENG
  ENG.tracks.forEach(function(tr) {
    tr.topics.forEach(function(tp) {
      searchIndex.push({
        id: tp.id,
        name: tp.name,
        sub: tp.sub,
        courseId: 'english',
        trackId: tr.id
      });
    });
  });
}

function initSearchWidget() {
  var searchInput = document.getElementById('searchInput');
  var resultsBox = document.getElementById('searchResults');
  if (!searchInput || !resultsBox) return;
  
  buildSearchIndex();
  
  searchInput.addEventListener('input', function(e) {
    var query = e.target.value.toLowerCase().trim();
    if (!query) {
      resultsBox.style.display = 'none';
      return;
    }
    
    var matches = searchIndex.filter(function(item) {
      return item.name.toLowerCase().includes(query) || 
             item.sub.toLowerCase().includes(query);
    });
    
    resultsBox.innerHTML = '';
    
    if (matches.length === 0) {
      resultsBox.innerHTML = '<div class="p-3 text-xs text-gray-500 text-center">No matching topics found</div>';
    } else {
      matches.slice(0, 5).forEach(function(item) {
        var row = document.createElement('div');
        row.className = 'search-result-item';
        
        var courseBadge = item.courseId === 'aptitude'
          ? '<span class="badge text-amber-500" style="background:var(--accent-dim); font-size:0.6rem">Aptitude</span>'
          : (item.courseId === 'reasoning'
             ? '<span class="badge text-emerald-400" style="background:var(--accent2-dim); font-size:0.6rem">Reasoning</span>'
             : '<span class="badge text-purple-400" style="background:rgba(168,85,247,0.08); font-size:0.6rem">English</span>');
          
        row.innerHTML = 
          '<div>' +
            '<div class="text-xs font-semibold text-gray-200">' + item.name + '</div>' +
            '<div class="text-[10px] text-gray-500 mt-0.5">' + item.sub + '</div>' +
          '</div>' +
          '<div>' + courseBadge + '</div>';
          
        row.onclick = function() {
          searchInput.value = '';
          resultsBox.style.display = 'none';
          
          // Setup active details
          curCourse = (item.courseId === 'aptitude') ? APT : (item.courseId === 'reasoning' ? REA : ENG);
          curTrack = curCourse.tracks.find(function(t) { return t.id === item.trackId; });
          
          navigate('topic', item.id);
        };
        
        resultsBox.appendChild(row);
      });
    }
    resultsBox.style.display = 'block';
  });
  
  // Close dropdown on click outside
  document.addEventListener('click', function(e) {
    if (e.target !== searchInput) {
      resultsBox.style.display = 'none';
    }
  });
}

/* ===== CANVAS PARTICLE PHYSICS BACKGROUND ===== */
function initParticles() {
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  
  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouse = { x: null, y: null, radius: 100 };
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();
  
  // Track mouse movements
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  window.addEventListener('mouseleave', function() {
    mouse.x = null;
    mouse.y = null;
  });
  
  // Generate particles
  var density = Math.min(Math.round((canvas.width * canvas.height) / 18000), 75);
  for (var i = 0; i < density; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw connections
    for (var i = 0; i < particles.length; i++) {
      var p1 = particles[i];
      for (var j = i + 1; j < particles.length; j++) {
        var p2 = particles[j];
        var dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          // connect opacity based on distance
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + ((100 - dist) / 1000) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    
    // Draw and update nodes
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      
      // Node particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fill();
      
      // Update coordinates
      p.x += p.vx;
      p.y += p.vy;
      
      // Bounds check
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      
      // Mouse interaction attract
      if (mouse.x && mouse.y) {
        var dMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dMouse < mouse.radius) {
          var angle = Math.atan2(mouse.y - p.y, mouse.x - p.x);
          p.x += Math.cos(angle) * 0.2;
          p.y += Math.sin(angle) * 0.2;
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ===== NUMERICAL COUNTER ANIMATIONS ===== */
function initCounters() {
  var counters = document.querySelectorAll('.counter');
  counters.forEach(function(c) {
    c.innerText = '0';
    var target = +c.getAttribute('data-target');
    var increment = target / 50;
    
    function updateVal() {
      var curVal = +c.innerText;
      if (curVal < target) {
        c.innerText = Math.min(Math.round(curVal + increment), target);
        setTimeout(updateVal, 20);
      }
    }
    updateVal();
  });
}

// Navigation Bar visual class tweak on scroll
window.addEventListener('scroll', function() {
  var topNav = document.getElementById('topNav');
  if (topNav) {
    if (window.scrollY > 30) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  }
});

/* ===== INITIALIZATION HOOK ===== */
window.addEventListener('DOMContentLoaded', function() {
  loadState();
  initParticles();
  initSearchWidget();
  buildHome();
});


