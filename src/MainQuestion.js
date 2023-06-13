import {ATHEISM, MONOTHEISM, POLYTHEISM, ReligionBranchStrategy} from "./ReligionBranchStrategy";

export class MainQuestion {
    constructor(questionBlock) {
        this.questionBlock = questionBlock;
        this.answerMainQuestion = this.answerMainQuestion.bind(this);
    }

    answerMainQuestion(text) {
        const religionFactory = new ReligionBranchStrategy(this.questionBlock, text)
        religionFactory.defineBranch()
    }

    askMainQuestion() {
        const quest = document.createElement('div');
        quest.innerHTML = `
          <div>
            <div>Якій кількості богів ви би хотіли поклонятися?</div>
            <div class="btn-inner">
              <button>Безліч</button>
              <button>Одному</button>
              <button>Жодному</button>
            </div>
          </div>
        `;

        this.questionBlock.appendChild(quest);

        const btns = quest.querySelectorAll("button");
        btns.forEach((button, index) => {
            button.addEventListener("click", () => {
                const options = [POLYTHEISM, MONOTHEISM, ATHEISM];
                this.answerMainQuestion(`${options[index]}`);
            });
        });
    }
}