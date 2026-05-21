document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let currentQuiz = null;
  let currentQuestionIndex = 0;
  let userAnswers = []; // Stores the selected option index for each question
  let timeLeft = 0;
  let timerInterval = null;
  let isAnswerSubmitted = false;

  // DOM Elements
  const landingView = document.getElementById('landing-view');
  const quizView = document.getElementById('quiz-view');
  const resultsView = document.getElementById('results-view');
  
  const logoHomeBtn = document.getElementById('logo-home-btn');
  const homeNavBtn = document.getElementById('home-nav-btn');
  const quizzesGrid = document.getElementById('quizzes-grid');
  
  // Quiz DOM Elements
  const currentQuizTitle = document.getElementById('current-quiz-title');
  const quizProgressText = document.getElementById('quiz-progress-text');
  const timerDisplay = document.getElementById('timer-display');
  const quizTimerContainer = document.getElementById('quiz-timer');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const explanationPanel = document.getElementById('explanation-panel');
  const explanationStatusTitle = document.getElementById('explanation-status-title');
  const explanationTextContent = document.getElementById('explanation-text-content');
  const nextQuestionBtn = document.getElementById('next-question-btn');
  const quitQuizBtn = document.getElementById('quit-quiz-btn');

  // Results DOM Elements
  const resultsQuizName = document.getElementById('results-quiz-name');
  const scoreCircleProgress = document.getElementById('score-circle-progress');
  const scoreNumberDisplay = document.getElementById('score-number-display');
  const scorePercentDisplay = document.getElementById('score-percent-display');
  const scoreDetailsSummary = document.getElementById('score-details-summary');
  const feedbackTextContent = document.getElementById('feedback-text-content');
  const retryQuizBtn = document.getElementById('retry-quiz-btn');
  const goHomeBtn = document.getElementById('go-home-btn');
  const reviewListContainer = document.getElementById('review-list-container');

  // Initialize App
  function init() {
    renderQuizGrid();
    setupEventListeners();
    // Auto-start quiz if URL contains ?quiz=ID
    const params = new URLSearchParams(window.location.search);
    const quizId = params.get('quiz');
    if (quizId) {
      startQuiz(quizId);
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Navigation
    logoHomeBtn.addEventListener('click', navigateToHome);
    homeNavBtn.addEventListener('click', confirmAndGoHome);
    quitQuizBtn.addEventListener('click', confirmAndGoHome);
    goHomeBtn.addEventListener('click', navigateToHome);
    
    // Quiz Actions
    nextQuestionBtn.addEventListener('click', handleNextButton);
    retryQuizBtn.addEventListener('click', restartCurrentQuiz);
  }

  // View Navigation Helper
  function switchView(view) {
    // Hide all
    landingView.classList.remove('active');
    quizView.classList.remove('active');
    resultsView.classList.remove('active');
    
    // Reset heights/scroll positions
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Show specific view
    if (view === 'landing') {
      landingView.classList.add('active');
      homeNavBtn.style.display = 'none';
    } else if (view === 'quiz') {
      quizView.classList.add('active');
      homeNavBtn.style.display = 'flex';
    } else if (view === 'results') {
      resultsView.classList.add('active');
      homeNavBtn.style.display = 'flex';
    }
  }

  // Render Quiz Cards on landing page
  function renderQuizGrid() {
    quizzesGrid.innerHTML = '';
    
    if (!window.quizzesData || window.quizzesData.length === 0) {
      quizzesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No quizzes found. Please double check questions.js configuration.</p>';
      return;
    }

    window.quizzesData.forEach((quiz, index) => {
      const qNum = String(index + 1).padStart(2, '0');
      const minutes = Math.floor(quiz.timeLimit / 60);
      const seconds = quiz.timeLimit % 60;
      const formattedTime = `${minutes}m ${seconds > 0 ? seconds + 's' : ''}`;

      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.innerHTML = `
        <div class="card-header-info">
          <span class="quiz-number">Quiz ${qNum}</span>
          <div class="quiz-meta">
            <span class="quiz-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${formattedTime}
            </span>
            <span class="quiz-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              ${quiz.questions.length} Questions
            </span>
          </div>
        </div>
        <h3>${quiz.title}</h3>
        <p>${quiz.description}</p>
        <button class="btn start-quiz-btn" data-id="${quiz.id}">
          Start Quiz
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      `;

      quizzesGrid.appendChild(card);
    });

    // Add event listeners to newly generated buttons
    document.querySelectorAll('.start-quiz-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const quizId = e.currentTarget.getAttribute('data-id');
        startQuiz(quizId);
      });
    });
  }

  // Start Quiz Core Logic
  function startQuiz(quizId) {
    currentQuiz = window.quizzesData.find(q => q.id === quizId);
    if (!currentQuiz) return;

    currentQuestionIndex = 0;
    userAnswers = [];
    isAnswerSubmitted = false;
    timeLeft = currentQuiz.timeLimit;

    // Reset UI states
    currentQuizTitle.textContent = currentQuiz.title;
    quizTimerContainer.classList.remove('warning');
    
    switchView('quiz');
    renderQuestion();
    startTimer();
  }

  // Timer Implementation
  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 30) {
        quizTimerContainer.classList.add('warning');
      }

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoSubmitQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  // Auto Submit when Timer hits 0
  function autoSubmitQuiz() {
    alert("Time's up! Submitting your quiz now.");
    // Auto-fill unanswered questions with -1 (unanswered/incorrect)
    while (userAnswers.length < currentQuiz.questions.length) {
      userAnswers.push(-1);
    }
    finishQuiz();
  }

  // Render Current Question
  function renderQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    // Update progress numbers
    const totalQuestions = currentQuiz.questions.length;
    quizProgressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    // Render text
    questionText.textContent = question.question;

    // Render options
    optionsContainer.innerHTML = '';
    explanationPanel.classList.remove('visible');
    
    question.options.forEach((option, index) => {
      const label = String.fromCharCode(65 + index); // A, B, C, D
      const optionBtn = document.createElement('button');
      optionBtn.className = 'option-button';
      optionBtn.innerHTML = `
        <span><strong>${label}.</strong> ${option}</span>
        <div class="option-icon">${label}</div>
      `;
      
      optionBtn.addEventListener('click', () => selectOption(index));
      optionsContainer.appendChild(optionBtn);
    });

    // Reset Next/Submit Button
    nextQuestionBtn.innerHTML = `
      Submit Answer
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    `;
    nextQuestionBtn.disabled = true;
    isAnswerSubmitted = false;
  }

  // Handle Option Selection (Before Submission)
  function selectOption(index) {
    if (isAnswerSubmitted) return;

    // Remove active state from all options
    const optionBtns = optionsContainer.querySelectorAll('.option-button');
    optionBtns.forEach(btn => btn.classList.remove('selected'));

    // Highlight selected
    optionBtns[index].classList.add('selected');
    
    // Store temporarily in userAnswers
    userAnswers[currentQuestionIndex] = index;
    
    // Enable submit action
    nextQuestionBtn.disabled = false;
  }

  // Action flow for Footer button
  function handleNextButton() {
    if (!isAnswerSubmitted) {
      submitAnswer();
    } else {
      advanceQuiz();
    }
  }

  // Submit Answer Logic (Immediate Feedback Screen)
  function submitAnswer() {
    isAnswerSubmitted = true;
    const question = currentQuiz.questions[currentQuestionIndex];
    const selectedAnswerIndex = userAnswers[currentQuestionIndex];
    const correctIndex = question.answer;

    const optionBtns = optionsContainer.querySelectorAll('.option-button');
    
    // Lock all buttons, style output
    optionBtns.forEach((btn, index) => {
      btn.classList.add('locked');
      
      if (index === correctIndex) {
        btn.className = 'option-button locked correct';
        btn.querySelector('.option-icon').innerHTML = '✓';
      } else if (index === selectedAnswerIndex) {
        btn.className = 'option-button locked wrong';
        btn.querySelector('.option-icon').innerHTML = '✗';
      } else {
        // Clear selected classes of non-chosen options
        btn.classList.remove('selected');
      }
    });

    // Update Action Button
    const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;
    if (isLastQuestion) {
      nextQuestionBtn.innerHTML = `
        View Results
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      `;
    } else {
      nextQuestionBtn.innerHTML = `
        Next Question
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      `;
    }

    // Display Explanation Panel
    const isCorrect = selectedAnswerIndex === correctIndex;
    if (isCorrect) {
      explanationStatusTitle.textContent = 'Correct!';
      explanationPanel.style.borderLeftColor = 'var(--color-success)';
      explanationStatusTitle.style.color = 'var(--color-success)';
    } else {
      explanationStatusTitle.textContent = 'Incorrect';
      explanationPanel.style.borderLeftColor = 'var(--color-danger)';
      explanationStatusTitle.style.color = 'var(--color-danger)';
    }
    
    explanationTextContent.textContent = question.explanation;
    explanationPanel.classList.add('visible');
  }

  // Advance Quiz navigation
  function advanceQuiz() {
    const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;
    if (isLastQuestion) {
      finishQuiz();
    } else {
      currentQuestionIndex++;
      renderQuestion();
    }
  }

  // Finish Quiz and show Results Card
  function finishQuiz() {
    clearInterval(timerInterval);
    
    // Calculate Score
    let correctCount = 0;
    currentQuiz.questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correctCount++;
      }
    });

    const totalQuestions = currentQuiz.questions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);

    // Update Results Content
    resultsQuizName.textContent = `You finished: ${currentQuiz.title}`;
    scoreNumberDisplay.textContent = `${correctCount}/${totalQuestions}`;
    scorePercentDisplay.textContent = `${scorePercent}%`;
    scoreDetailsSummary.textContent = `You scored ${correctCount} out of ${totalQuestions} questions correct`;

    // Feedback messages
    let feedback = '';
    if (scorePercent === 100) {
      feedback = 'Exceptional performance! You answered every single question correctly. You are ready to present to any boardroom or launch any major marketing campaign!';
    } else if (scorePercent >= 80) {
      feedback = 'Outstanding effort! You have a strong comprehension of presentation styles and core marketing methodologies. Continue practicing and you will master these skills fully.';
    } else if (scorePercent >= 50) {
      feedback = 'Good progress! You understand the foundations, but reviewing slide structures or basic marketing mix formulas could make your next project even stronger.';
    } else {
      feedback = 'Keep learning! Don\'t worry, presentation delivery and marketing strategy are skills that grow through training. Study the question review below and try the quiz again.';
    }
    feedbackTextContent.textContent = feedback;

    // Render Review Section
    renderReviewSection();

    // Trigger Transition Views
    switchView('results');

    // Circular SVG Progress Ring Animation
    // Circumference = 2 * PI * r = 2 * 3.14159 * 70 = 439.8
    const circumference = 2 * Math.PI * 70;
    scoreCircleProgress.style.strokeDasharray = `${circumference}`;
    scoreCircleProgress.style.strokeDashoffset = `${circumference}`;
    
    setTimeout(() => {
      const offset = circumference - (scorePercent / 100) * circumference;
      scoreCircleProgress.style.strokeDashoffset = offset;
    }, 150);
  }

  // Render Detailed Question Review Block
  function renderReviewSection() {
    reviewListContainer.innerHTML = '';

    currentQuiz.questions.forEach((question, qIdx) => {
      const selectedIdx = userAnswers[qIdx];
      const correctIdx = question.answer;
      const isCorrect = selectedIdx === correctIdx;
      
      const reviewItem = document.createElement('div');
      reviewItem.className = `review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`;

      // Status badge
      const badgeClass = isCorrect ? 'correct' : 'incorrect';
      const badgeIcon = isCorrect ? '✓' : '✗';
      const badgeText = isCorrect ? 'Correct' : 'Incorrect';

      // Options list
      let choicesHtml = '';
      question.options.forEach((option, optIdx) => {
        const optionLabel = String.fromCharCode(65 + optIdx);
        let optClass = 'review-choice';
        
        if (optIdx === correctIdx) {
          optClass += ' correct-choice';
        } else if (optIdx === selectedIdx) {
          optClass += ' user-selected-wrong';
        }

        choicesHtml += `
          <div class="${optClass}">
            <strong>${optionLabel}.</strong> ${option}
            ${optIdx === correctIdx ? ' (Correct Answer)' : ''}
            ${optIdx === selectedIdx && !isCorrect ? ' (Your Answer)' : ''}
          </div>
        `;
      });

      reviewItem.innerHTML = `
        <div class="review-question-header">
          <div class="review-question-text">
            ${qIdx + 1}. ${question.question}
          </div>
          <span class="status-badge ${badgeClass}">
            ${badgeIcon} ${badgeText}
          </span>
        </div>
        <div class="review-choices">
          ${choicesHtml}
        </div>
        <div class="review-explanation">
          <span>EXPLANATION:</span>
          ${question.explanation}
        </div>
      `;

      reviewListContainer.appendChild(reviewItem);
    });
  }

  // Restart Active Quiz
  function restartCurrentQuiz() {
    if (currentQuiz) {
      startQuiz(currentQuiz.id);
    }
  }

  // Home Navigation with Dialog confirmation if in active quiz
  function confirmAndGoHome() {
    if (quizView.classList.contains('active') && !isAnswerSubmitted && currentQuestionIndex > 0) {
      if (confirm('Are you sure you want to quit the quiz? Your current progress will be lost.')) {
        clearInterval(timerInterval);
        navigateToHome();
      }
    } else {
      clearInterval(timerInterval);
      navigateToHome();
    }
  }

  function navigateToHome() {
    switchView('landing');
  }

  // Initialize
  init();
});
