import {Question} from "./Question";

export class AtheismBranch {
    allQuestions = [
        {
            question: "Ви багаті та шалені?",
            options: [
                {text: "Так", finalText: "Вам треба бути саєнтологом"},
                {text: "Ні", finalText: "Вам треба бути атеїстом"},
            ],
        },
    ];

    constructor(questionBlock,branchName) {
        this.questionBlock = questionBlock;
        this.branchName = branchName
    }

    startBranch() {
        this.askQuestion(0)
    }

    askQuestion(questionIndex) {
        const currentQuestion = this.allQuestions[questionIndex];
        const question = new Question(
            this.questionBlock,
            currentQuestion.question,
            currentQuestion.options,
            questionIndex,
            this.branchName
        );
        question.showQuestion();
    }
}