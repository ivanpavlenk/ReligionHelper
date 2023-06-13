import {ATHEISM, MONOTHEISM, POLYTHEISM} from "./ReligionBranchStrategy";
import {AtheismBranch} from "./AtheismBranch";
import {PolytheismBranch} from "./PolytheismBranch";
import {MonotheismBranch} from "./MonotheismBranch";

export class AnswerQuestion {
    constructor(branchName) {
        this.branchName = branchName
    }

    answerQuestion(option, questionIndex, strategy) {
        const questionBlock = document.querySelector(".question-block");
        if (option.finalText) {
            return questionBlock.innerHTML = strategy(option.finalText)

        }

        switch (this.branchName) {
            case MONOTHEISM: {

                if (option.subBranch) {
                    const branch = new MonotheismBranch(questionBlock, this.branchName, option.subBranch)
                    branch.askQuestion(0)
                } else {
                    const branch = new MonotheismBranch(questionBlock, this.branchName)
                    branch.askQuestion(++questionIndex)
                }
                break;
            }

            case ATHEISM: {
                const branch = new AtheismBranch(questionBlock, this.branchName)
                branch.askQuestion(++questionIndex)
                break;
            }

            case POLYTHEISM: {
                const branch = new PolytheismBranch(questionBlock, this.branchName)
                branch.askQuestion(++questionIndex)
                break;
            }

            default :
                return questionBlock.innerHTML = strategy("Верьте в себя")
        }

    }

}