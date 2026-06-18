/**
 * quiz.js — Shared quiz widget for attention-is-all-you-need lessons.
 *
 * Usage: include <script src="../assets/quiz.js"></script> at end of body.
 *
 * Markup contract:
 *
 *   <div class="quiz" data-quiz>
 *     <div class="quiz-header">Check your understanding</div>
 *
 *     <div class="quiz-item" data-correct="2">
 *       <p class="quiz-question">1. What does a bigram model predict?</p>
 *       <ul class="quiz-options">
 *         <li><button>The entire sentence at once</button></li>
 *         <li><button>The next word given the previous word</button></li>  <!-- index 2, 1-based -->
 *         <li><button>The meaning of a sentence as a vector</button></li>
 *       </ul>
 *       <p class="quiz-feedback"></p>
 *     </div>
 *
 *     <!-- more .quiz-item divs ... -->
 *
 *     <div class="quiz-progress">
 *       <span class="quiz-score-label">0 / 0 correct</span>
 *       <div class="quiz-score-bar"><div class="quiz-score-fill"></div></div>
 *       <span class="quiz-pct">–</span>
 *     </div>
 *   </div>
 *
 * data-correct is 1-based index of the correct <button> within .quiz-options.
 *
 * feedback-correct and feedback-incorrect attributes on .quiz-item are optional
 * explanations shown after answering:
 *   data-feedback-correct="Right! Because..."
 *   data-feedback-incorrect="Not quite. The key idea is..."
 */

(function () {
  "use strict";

  function initQuiz(quizEl) {
    const items = Array.from(quizEl.querySelectorAll(".quiz-item"));
    const scoreLabel = quizEl.querySelector(".quiz-score-label");
    const scoreFill = quizEl.querySelector(".quiz-score-fill");
    const scorePct = quizEl.querySelector(".quiz-pct");

    let answered = 0;
    let correct = 0;

    function updateScore() {
      if (!scoreLabel) return;
      scoreLabel.textContent = `${correct} / ${answered} correct`;
      const pct = items.length > 0 ? Math.round((correct / items.length) * 100) : 0;
      if (scoreFill) scoreFill.style.width = `${Math.round((answered / items.length) * 100)}%`;
      if (scorePct) scorePct.textContent = answered === items.length ? `${pct}%` : "–";
      // Turn bar green if all done and all correct
      if (answered === items.length && scoreFill) {
        scoreFill.style.background = correct === items.length ? "var(--success)" : "var(--error)";
      }
    }

    items.forEach(function (item) {
      const correctIdx = parseInt(item.getAttribute("data-correct"), 10); // 1-based
      const buttons = Array.from(item.querySelectorAll(".quiz-options button"));
      const feedback = item.querySelector(".quiz-feedback");
      const feedbackCorrect = item.getAttribute("data-feedback-correct") || "Correct.";
      const feedbackIncorrect = item.getAttribute("data-feedback-incorrect") || "Not quite — try re-reading the section above.";

      buttons.forEach(function (btn, i) {
        btn.addEventListener("click", function () {
          if (item.dataset.answered) return; // already answered
          item.dataset.answered = "true";
          answered++;

          const isCorrect = (i + 1) === correctIdx;

          buttons.forEach(function (b, j) {
            b.disabled = true;
            if ((j + 1) === correctIdx) b.classList.add("correct");
          });

          if (isCorrect) {
            correct++;
            btn.classList.add("correct");
            if (feedback) {
              feedback.textContent = "✓ " + feedbackCorrect;
              feedback.className = "quiz-feedback visible correct";
            }
          } else {
            btn.classList.add("incorrect");
            if (feedback) {
              feedback.textContent = "✗ " + feedbackIncorrect;
              feedback.className = "quiz-feedback visible incorrect";
            }
          }

          updateScore();
        });
      });
    });

    updateScore();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-quiz]").forEach(initQuiz);
  });
})();
