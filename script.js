function startQuiz() {
    let score = 0;

    let questions = [
        {
            question: "What is the correct way to declare a JavaScript variable?",
            options: ["a) variable x;", "b) var x;", "c) v x;"],
            answer: "b"
        },
        {
            question: "Which of the following is a correct way to write a comment in JavaScript?",
            options: ["a) /* This is a comment */", "b) <!-- This is a comment -->", "c) # This is a comment"],
            answer: "a"
        },
        {
            question: "Which of the following is the correct way to write an array in JavaScript?",
            options: ["a) var colors = \"red\", \"green\", \"blue\";", "b) var colors = [\"red\", \"green\", \"blue\"];", "c) var colors = {\"red\", \"green\", \"blue\"};"],
            answer: "b"
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            options: ["a) onclick", "b) onmouseover", "c) onchange"],
            answer: "a"
        },
        {
            question: "How do you find the length of an array arr in JavaScript?",
            options: ["a) arr.length;", "b) arr.size;", "c) arr.count;"],
            answer: "a"
        },
        {
            question: "What is the output of the following code? console.log(typeof NaN);",
            options: ["a) undefined", "b) number", "c) string"],
            answer: "b"
        },
        {
            question: "Which method is used to remove the last element from an array in JavaScript?",
            options: ["a) shift()", "b) pop()", "c) splice()"],
            answer: "b"
        },
        {
            question: "What is the result of 2 + '2' in JavaScript?",
            options: ["a) 4", "b) 22", "c) NaN"],
            answer: "b"
        },
        {
            question: "Which of the following is not a JavaScript data type?",
            options: ["a) Boolean", "b) Float", "c) Undefined"],
            answer: "b"
        },
        {
            question: "What is the correct syntax for an if statement in JavaScript?",
            options: ["a) if x == 5 then", "b) if (x == 5)", "c) if x = 5"],
            answer: "b"
        }
    ];

    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i].question + "\n" + questions[i].options.join("\n"));
        if (userAnswer.toLowerCase() === questions[i].answer) {
            score++;
        }
    }

    alert("You scored " + score + " out of " + questions.length);
}
