(() => {
    "use strict";

    const TOTAL_QUESTIONS = 21;

    const questions = [
        {
            type: "single",
            question: "What is the primary purpose of the HTML <mark> element?",
            options: [
                "To mark text relevant to the current context",
                "To make text bold and important",
                "To create a clickable link",
                "To change the font size",
            ],
            answer: "To mark text relevant to the current context",
            explanation:
                "<mark> identifies text relevant for reference or notation. It is not the same as <strong>, which indicates importance.",
        },
        {
            type: "single",
            question:
                "Which element is best for purely decorative text styling when no semantic element fits?",
            options: ["<mark>", "<span>", "<strong>", "<h1>"],
            answer: "<span>",
            explanation:
                "<span> is a generic inline container. Use it with a class when you need styling without adding a specific semantic meaning.",
        },
        {
            type: "single",
            question:
                "Which CSS property changes the color of the text itself?",
            options: [
                "background-color",
                "font-style",
                "color",
                "text-decoration",
            ],
            answer: "color",
            explanation:
                "The CSS color property sets the foreground color of text.",
        },
        {
            type: "single",
            question:
                "Which CSS property sets the background behind a highlighted phrase?",
            options: [
                "text-color",
                "background-color",
                "font-background",
                "highlight",
            ],
            answer: "background-color",
            explanation:
                "background-color sets an element's background color, including an inline element such as <mark> or <span>.",
        },
        {
            type: "single",
            question:
                "Which snippet correctly highlights the word 'important' semantically?",
            code: "<p>This is <mark>important</mark>.</p>",
            options: [
                "<p>This is <mark>important</mark>.</p>",
                "<p>This is <highlight>important</highlight>.</p>",
                "<p><background>important</background></p>",
                "<p>This is <color>important</color>.</p>",
            ],
            answer: "<p>This is <mark>important</mark>.</p>",
            explanation:
                "<mark> is the standard HTML element for text highlighted because it is relevant in context.",
        },
        {
            type: "multi",
            question: "Which statements about <mark> are correct?",
            options: [
                "It represents text relevant in the current context.",
                "Its appearance can be customized with CSS.",
                "It always means the text is the most important content.",
                "It can highlight matching search terms.",
            ],
            answer: [
                "It represents text relevant in the current context.",
                "Its appearance can be customized with CSS.",
                "It can highlight matching search terms.",
            ],
            explanation:
                "<mark> communicates relevance, and its styling is customizable. It does not replace <strong> for indicating importance.",
        },
        {
            type: "single",
            question: "What does this CSS do?",
            code: ".highlight { color: #ffffff; background-color: #222222; }",
            options: [
                "Makes the text white on a dark background",
                "Makes the background white and text dark",
                "Underlines the text",
                "Changes the text to uppercase",
            ],
            answer: "Makes the text white on a dark background",
            explanation:
                "color sets the text to white, while background-color sets the background to dark gray.",
        },
        {
            type: "single",
            question: "What is the default display behavior of <span>?",
            options: ["Block-level", "Inline", "Grid", "Flex"],
            answer: "Inline",
            explanation:
                "<span> is an inline element by default, so it can wrap a portion of text without starting a new block.",
        },
        {
            type: "single",
            question: "Which selector targets every <mark> element?",
            options: ["#mark", ".mark", "mark", "*mark"],
            answer: "mark",
            explanation:
                "The type selector mark targets all HTML mark elements. .mark selects a class, and #mark selects an ID.",
        },
        {
            type: "multi",
            question:
                "Which are valid ways to create a visual highlight using CSS?",
            options: [
                "Set background-color on a span",
                "Use a linear-gradient background image",
                "Use box-shadow to create an underline-like accent",
                "Use the made-up property text-highlight-color",
            ],
            answer: [
                "Set background-color on a span",
                "Use a linear-gradient background image",
                "Use box-shadow to create an underline-like accent",
            ],
            explanation:
                "Background colors, gradients, and shadows can all create highlight effects. text-highlight-color is not a standard CSS property.",
        },
        {
            type: "single",
            question:
                "Which HTML element indicates strong importance rather than contextual highlighting?",
            options: ["<mark>", "<span>", "<strong>", "<small>"],
            answer: "<strong>",
            explanation:
                "<strong> indicates strong importance. <mark> highlights text relevant to the surrounding context.",
        },
        {
            type: "single",
            question: "What does this rule change?",
            code: "mark { background-color: #d9ff43; color: #10110f; }",
            options: [
                "All marked text gets a lime background and dark text",
                "All paragraphs get a lime background",
                "All text becomes lime",
                "Every link gets a dark background",
            ],
            answer: "All marked text gets a lime background and dark text",
            explanation:
                "The mark type selector styles all <mark> elements with the specified background and text colors.",
        },
        {
            type: "multi",
            question: "Which practices help keep highlighted text accessible?",
            options: [
                "Use sufficient contrast between text and background.",
                "Check that the text remains readable on small screens.",
                "Use color alone to communicate every important meaning.",
                "Keep semantic meaning appropriate to the content.",
            ],
            answer: [
                "Use sufficient contrast between text and background.",
                "Check that the text remains readable on small screens.",
                "Keep semantic meaning appropriate to the content.",
            ],
            explanation:
                "Contrast, readability, and correct semantics all matter. Avoid relying on color alone to communicate important information.",
        },
        {
            type: "single",
            question:
                "Which declaration creates rounded corners on a highlight?",
            options: [
                "corner-radius: 8px;",
                "border-style: round;",
                "border-radius: 8px;",
                "text-radius: 8px;",
            ],
            answer: "border-radius: 8px;",
            explanation:
                "border-radius rounds an element's corners. Small padding can also help a rounded inline highlight look intentional.",
        },
        {
            type: "single",
            question: "What does this selector target?",
            code: ".note span { color: purple; }",
            options: [
                "Every span inside an element with class note",
                "Every element named note",
                "Every span with ID note",
                "Only the first span on the page",
            ],
            answer: "Every span inside an element with class note",
            explanation:
                "The descendant selector matches span elements nested anywhere inside an element with class note.",
        },
        {
            type: "single",
            question:
                "Which CSS declaration adds a colored underline-like highlight?",
            options: [
                "text-decoration: background;",
                "box-shadow: inset 0 -0.15em 0 yellow;",
                "font-style: underline;",
                "background-position: underline;",
            ],
            answer: "box-shadow: inset 0 -0.15em 0 yellow;",
            explanation:
                "An inset box shadow can create a colored strip along the bottom of an inline element. text-decoration: underline is also valid for ordinary underlining, but not the first option.",
        },
        {
            type: "multi",
            question: "Which statements about CSS color styling are true?",
            options: [
                "color sets the text foreground color.",
                "background-color sets the element background.",
                "CSS can override the default appearance of <mark>.",
                "Changing color automatically changes background-color.",
            ],
            answer: [
                "color sets the text foreground color.",
                "background-color sets the element background.",
                "CSS can override the default appearance of <mark>.",
            ],
            explanation:
                "Text and background colors are separate CSS properties. You can style the default mark appearance explicitly.",
        },
        {
            type: "single",
            question: "What is the main purpose of the <span> element?",
            options: [
                "To create a new section heading",
                "To group inline content when no more semantic element fits",
                "To highlight text semantically in every situation",
                "To create a new paragraph",
            ],
            answer: "To group inline content when no more semantic element fits",
            explanation:
                "<span> is a generic inline container, often used to apply CSS to a phrase or word.",
        },
        {
            type: "single",
            question:
                "Which choice is best for highlighting a matching word in search results?",
            options: [
                "Use <mark> when the match is relevant to the user's search.",
                "Use <h1> around every match.",
                "Use <strong> because all matches are important.",
                "Use <br> around the word.",
            ],
            answer: "Use <mark> when the match is relevant to the user's search.",
            explanation:
                "Search-result matches are a classic use case for <mark> because they are relevant to the user's current activity.",
        },
        {
            type: "multi",
            question:
                "Which statements about text contrast and highlight design are correct?",
            options: [
                "Text should have sufficient contrast against its background.",
                "A decorative highlight should not make the text hard to read.",
                "A bright background always guarantees readable text.",
                "A highlight can use padding to improve its visual appearance.",
            ],
            answer: [
                "Text should have sufficient contrast against its background.",
                "A decorative highlight should not make the text hard to read.",
                "A highlight can use padding to improve its visual appearance.",
            ],
            explanation:
                "Contrast depends on both foreground and background colors. Brightness alone does not guarantee readability, and padding can refine the visual effect.",
        },
        {
            type: "single",
            question:
                "You want a decorative lime background behind one phrase, without implying semantic relevance. Which approach is best?",
            code: '<p>Build <span class="accent">beautiful interfaces</span>.</p>',
            options: [
                "Use a styled <span> with a CSS class",
                "Use <mark> for every decorative effect",
                "Use <title> around the phrase",
                "Use <body> around the phrase",
            ],
            answer: "Use a styled <span> with a CSS class",
            explanation:
                "A styled span is appropriate for purely decorative text treatments. Use <mark> when the highlighted text is relevant in context.",
        },
    ];

    const elements = {
        quiz: document.querySelector("#quiz"),
        results: document.querySelector("#results"),
        questionCounter: document.querySelector("#questionCounter"),
        score: document.querySelector("#score"),
        progressFill: document.querySelector("#progressFill"),
        questionType: document.querySelector("#questionType"),
        questionText: document.querySelector("#questionText"),
        questionHint: document.querySelector("#questionHint"),
        codeExample: document.querySelector("#codeExample"),
        codeText: document.querySelector("#codeText"),
        options: document.querySelector("#options"),
        feedback: document.querySelector("#feedback"),
        checkButton: document.querySelector("#checkButton"),
        nextButton: document.querySelector("#nextButton"),
        restartButton: document.querySelector("#restartButton"),
        finalScore: document.querySelector("#finalScore"),
        resultMessage: document.querySelector("#resultMessage"),
        accuracy: document.querySelector("#accuracy"),
        correctCount: document.querySelector("#correctCount"),
        resultGrade: document.querySelector("#resultGrade"),
    };

    let quizQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let selectedOptions = new Set();

    // Fisher-Yates shuffle: returns a shuffled copy of an array.
    function shuffle(items) {
        const result = [...items];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    function normalizeAnswer(answer) {
        return Array.isArray(answer) ? answer : [answer];
    }

    function prepareQuestions() {
        return shuffle(questions).map((question) => ({
            ...question,
            options: shuffle(question.options),
        }));
    }

    function getCurrentQuestion() {
        return quizQuestions[currentIndex];
    }

    function renderQuestion() {
        const question = getCurrentQuestion();

        answered = false;
        selectedOptions = new Set();

        elements.questionCounter.textContent = `QUESTION ${String(currentIndex + 1).padStart(2, "0")} / ${TOTAL_QUESTIONS}`;

        elements.score.textContent = score;

        elements.progressFill.style.width = `${(currentIndex / TOTAL_QUESTIONS) * 100}%`;

        elements.questionType.textContent =
            question.type === "multi" ? "MULTIPLE ANSWERS" : "SINGLE ANSWER";

        elements.questionText.textContent = question.question;

        elements.questionHint.textContent =
            question.type === "multi"
                ? "Select every correct answer before checking."
                : "Choose one answer before checking.";

        elements.codeExample.hidden = !question.code;

        if (question.code) {
            elements.codeText.textContent = question.code;
        }

        elements.feedback.hidden = true;
        elements.feedback.className = "feedback";
        elements.feedback.textContent = "";

        elements.checkButton.hidden = false;
        elements.checkButton.disabled = true;
        elements.nextButton.hidden = true;

        elements.options.replaceChildren();

        question.options.forEach((optionText, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "option";
            button.dataset.answer = optionText;
            button.setAttribute("aria-pressed", "false");

            const letter = document.createElement("span");
            letter.className = "option-letter";
            letter.textContent = String.fromCharCode(65 + index);
            letter.setAttribute("aria-hidden", "true");

            const text = document.createElement("span");
            text.className = "option-text";
            text.textContent = optionText;

            button.append(letter, text);
            button.addEventListener("click", () =>
                selectOption(button, optionText),
            );

            elements.options.append(button);
        });
    }

    function selectOption(button, optionText) {
        if (answered) return;

        const question = getCurrentQuestion();

        if (question.type === "single") {
            selectedOptions.clear();

            elements.options.querySelectorAll(".option").forEach((option) => {
                option.classList.remove("selected");
                option.setAttribute("aria-pressed", "false");
            });
        }

        if (selectedOptions.has(optionText)) {
            selectedOptions.delete(optionText);
            button.classList.remove("selected");
            button.setAttribute("aria-pressed", "false");
        } else {
            selectedOptions.add(optionText);
            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");
        }

        elements.checkButton.disabled = selectedOptions.size === 0;
    }

    function arraysMatch(selected, correct) {
        if (selected.size !== correct.length) return false;

        return correct.every((answer) => selected.has(answer));
    }

    function checkAnswer() {
        if (answered || selectedOptions.size === 0) return;

        answered = true;

        const question = getCurrentQuestion();
        const correctAnswers = normalizeAnswer(question.answer);
        const isCorrect = arraysMatch(selectedOptions, correctAnswers);

        if (isCorrect) {
            score++;
            elements.score.textContent = score;
        }

        elements.options.querySelectorAll(".option").forEach((button) => {
            const answer = button.dataset.answer;
            const isSelected = selectedOptions.has(answer);
            const isAnswerCorrect = correctAnswers.includes(answer);

            button.disabled = true;

            if (isAnswerCorrect) {
                button.classList.add("correct");
            } else if (isSelected) {
                button.classList.add("incorrect");
            }
        });

        elements.feedback.hidden = false;
        elements.feedback.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;

        const title = document.createElement("strong");
        title.textContent = isCorrect
            ? "Correct. Well done."
            : "Not quite. Keep learning.";

        const explanation = document.createElement("span");
        explanation.textContent = question.explanation;

        elements.feedback.replaceChildren(title, explanation);

        elements.checkButton.hidden = true;
        elements.nextButton.hidden = false;

        elements.nextButton.innerHTML =
            currentIndex === TOTAL_QUESTIONS - 1
                ? "View results <span>↗</span>"
                : "Next question <span>→</span>";

        elements.progressFill.style.width = `${((currentIndex + 1) / TOTAL_QUESTIONS) * 100}%`;
    }

    function showResults() {
        elements.quiz.hidden = true;
        elements.results.hidden = false;

        const accuracy = Math.round((score / TOTAL_QUESTIONS) * 100);

        elements.finalScore.textContent = score;
        elements.accuracy.textContent = `${accuracy}%`;
        elements.correctCount.textContent = `${score} / ${TOTAL_QUESTIONS}`;

        let grade;
        let message;

        if (accuracy >= 90) {
            grade = "EXCELLENT";
            message =
                "Outstanding work. You understand semantic highlighting and CSS text effects.";
        } else if (accuracy >= 75) {
            grade = "STRONG";
            message =
                "Great progress. Review the explanations for the questions you missed.";
        } else if (accuracy >= 50) {
            grade = "DEVELOPING";
            message =
                "You're building the right foundation. Revisit the lesson and try again.";
        } else {
            grade = "KEEP GOING";
            message =
                "Every attempt helps. Review mark, span, color, and background-color, then retry.";
        }

        elements.resultGrade.textContent = grade;
        elements.resultMessage.textContent = message;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function nextQuestion() {
        if (!answered) return;

        if (currentIndex < TOTAL_QUESTIONS - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    }

    function startQuiz() {
        quizQuestions = prepareQuestions();
        currentIndex = 0;
        score = 0;
        answered = false;
        selectedOptions = new Set();

        elements.quiz.hidden = false;
        elements.results.hidden = true;

        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    elements.checkButton.addEventListener("click", checkAnswer);
    elements.nextButton.addEventListener("click", nextQuestion);
    elements.restartButton.addEventListener("click", startQuiz);

    if (questions.length !== TOTAL_QUESTIONS) {
        console.error(
            `Expected ${TOTAL_QUESTIONS} questions but found ${questions.length}.`,
        );
    }

    startQuiz();
})();
