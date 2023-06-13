import {Question} from "./Question";

const HUMMUS = "HUMMUS"
const BACON = "BACON"
const IRRITATION = "IRRITATION"

export class MonotheismBranch {

    mainBranchQuestions = [
        {
            question: "Вам подобаються роги?",
            options: [
                {text: "Так", finalText: "Будьте сатаністом"},
                {text: "Ні"},
            ],
        },
        {
            question: "Як ви ставитеся до бекону?",
            options: [
                {text: "Ну...", subBranch: HUMMUS},
                {text: "Я обожнюю бекон", subBranch: BACON},
            ],
        },
    ];

    hummusBranchQuestions = [
        {
            question: "Вам подобається хумус?",
            options: [
                {text: "Ну..", finalText: "Будьте іудеєм"},
                {text: "Обожнюю хумус", finalText: "Будьте мусульманином"},
            ],
        },
    ]

    baconBranchQuestions = [
        {
            question: "Ви дратуєте людей?",
            options: [
                {text: "Так", subBranch: IRRITATION},
                {text: "Ні", finalText: "Можете бути християнином"},
            ],
        }
    ]

    irritationBranchQuestions = [
        {
            question: "Чи вважаєте ви, що нижня білизна може зцілювати?",
            options: [
                {text: "Так", finalText: "Будьте мормоном"},
                {text: "Ні", finalText: "Будьте свідком Єгови"},
            ],
        },
    ]

    constructor(questionBlock, branchName, subBranch = null,) {
        this.questionBlock = questionBlock;
        this.subBranch = subBranch
        this.branchName = branchName
    }

    startBranch() {
        this.askQuestion(0)
    }

    askQuestion(questionIndex) {
        const currentQuestion = this.defineSubBranch()[questionIndex];
        const question = new Question(
            this.questionBlock,
            currentQuestion.question,
            currentQuestion.options,
            questionIndex,
            this.branchName
        );
        question.showQuestion();
    }

    defineSubBranch() {
        switch (this.subBranch) {
            case HUMMUS: {
                return this.hummusBranchQuestions
            }
            case BACON: {
                return this.baconBranchQuestions
            }
            case IRRITATION: {
                return this.irritationBranchQuestions
            }
            default:
                return this.mainBranchQuestions
        }
    }
}