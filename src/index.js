import './style.css'
import {MainQuestion} from "./MainQuestion";

const questionBlock = document.querySelector(".question-block");
const mainQuestion = new MainQuestion(questionBlock);
mainQuestion.askMainQuestion();

