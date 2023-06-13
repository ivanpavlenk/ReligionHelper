import {SimpleResponseStrategy} from "./SimpleResponseStrategy";
import {AnswerQuestion} from "./AnswerQuestion";

export class Question {
    constructor(questionBlock, questionText, answerOptions,questionIndex,branchName) {
        this.questionBlock = questionBlock;
        this.questionText = questionText;
        this.answerOptions = answerOptions;
        this.questionIndex = questionIndex
        this.branchName = branchName
    }

    showQuestion() {
        this.questionBlock.innerHTML = "";
        const quest = document.createElement("div");
        quest.innerHTML = `
      <div>
        <div class="quest">${this.questionText}</div>
        <div class="btn-inner">
          <button class="quest-btn">${this.answerOptions[0].text}</button>
          <button class="quest-btn">${this.answerOptions[1].text}</button>
        </div>
      </div>
    `;

        this.questionBlock.appendChild(quest);
        const answer = new AnswerQuestion(this.branchName)
        const btns = quest.querySelectorAll(".quest-btn");
        btns.forEach((button, index) => {
            button.addEventListener("click", () => {
                answer.answerQuestion(this.answerOptions[index],this.questionIndex,SimpleResponseStrategy);
            });
        });
    }
}