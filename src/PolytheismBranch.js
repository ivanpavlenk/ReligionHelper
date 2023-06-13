import {Question} from "./Question";

 export class PolytheismBranch {

    allQuestions = [
        {
            question: "Бажаєте перевтілитися?",
            options: [
                {text: "Так"},
                {text: "Ні", finalText: "Ви повинні слідувати релігії Майа"},
            ],
        },

        {
            question: "У вас є чорний кіт?",
            options: [
                {text: "Так", finalText: "Ваша релігія: Вікка - релігія чаклунів"},
                {text: "Ні"},
            ],
        },

        {
            question: "Ви віддаєте перевагу індійській чи китайській їжі?",
            options: [
                {text: "Індія", finalText: "Ваша релігія - Хінді"},
                {text: "Китай", finalText: "Ви маєте бути буддистом"},
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