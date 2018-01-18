import {Component, Input, OnInit} from '@angular/core';
import { QuestContentService } from "../../services/questContent/quest-content.service"
import {isBoolean} from "util";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    public questions: any[];
    public currentQuestion: number;
    public currentAnswer: number;
    public res: any[];
    public lineNum: any[];
    public lengthArr: number;
    public isShownRes: boolean;
    public isShownPopUp: boolean;

    constructor(private QuestContentService: QuestContentService) {
    }

    ngOnInit() {
        this.QuestContentService.getAllQuest()
            .subscribe((res) => {
                this.questions = res;
            }, (err) => {
                console.log(err)
            })
        this.currentQuestion = 0;
        this.currentAnswer = null;
        this.res = [];
        this.lineNum = [];
        this.lengthArr = this.questions.length;
        this.isShownRes = false;
        this.isShownPopUp = false;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestion].text
    }

    getCurrentVar() {
        console.log(this.currentQuestion)
        return this.questions[this.currentQuestion].variants;

    }

    checkAnswer() {
        return this.currentAnswer === null ? null :
            this.currentAnswer === +this.questions[this.currentQuestion].answer
    }

    nextQuestion() {
        this.res[this.currentQuestion] = this.checkAnswer();
        this.currentAnswer = null;
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++
        }
    }

    countRes() {
       return this.res.reduce((count, item) => count + item, 0)
    }

    chooseQuest(i) {
        this.currentQuestion = i
    }

    showPop() {
        this.res.includes(null) ?  this.isShownPopUp = true
           : this.res.join(' ,').split(' ,').some((v) => v === '') ?
                this.isShownPopUp = true : this.isShownRes = true;
        //console.log(this.res)
    }

    closePopUp() {
        this.isShownRes = false;
        this.isShownPopUp = false;
    }
    showRes(show) {
        this.isShownRes = show
    }





}








