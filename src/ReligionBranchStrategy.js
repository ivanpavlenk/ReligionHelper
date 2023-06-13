import {PolytheismBranch} from "./PolytheismBranch";
import {AtheismBranch} from "./AtheismBranch";
import {MonotheismBranch} from "./MonotheismBranch";

export const MONOTHEISM = "MONOTHEISM"
export const POLYTHEISM = "POLYTHEISM"
export const ATHEISM = "ATHEISM"

export class ReligionBranchStrategy {
    constructor(questionBlock, answer) {
        this.answer = answer
        this.questionBlock = questionBlock
    }

    defineBranch() {
        switch (this.answer) {
            case POLYTHEISM: {
                const branch = new PolytheismBranch(this.questionBlock, this.answer)
                branch.startBranch()
                break;
            }

            case MONOTHEISM: {
                const branch = new MonotheismBranch(this.questionBlock, this.answer)
                branch.startBranch()
                break;
            }

            case ATHEISM: {
                const branch = new AtheismBranch(this.questionBlock, this.answer)
                branch.startBranch()
                break;
            }
        }
    }
}