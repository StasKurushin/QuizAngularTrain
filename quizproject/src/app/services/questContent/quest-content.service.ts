import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class QuestContentService {

  constructor() { }

  getAllQuest () {
    const questArr =
        [
            {
                text: '2 + 2 = ?',
                answer: '4',
                variants: [3, 4, 6, 7, 8, 9],
            },
            {
                text: '3 + 2 = ?',
                answer: '5',
                variants : [1, 5],
            },
            {
                text: '6 + 3 = ?',
                answer: '9',
                variants : [8, 9],
            },
            {
                text: '3 + 3 = ?',
                answer: '6',
                variants : [3, 6],
            },
            {
                text: 'Что такое ДНК?',
                answer: '6',
                variants : ["Дизоксирибонуклииновая кислота", ""],
            },
            {
                text: '3 + 3 = ?',
                answer: '6',
                variants : [3, 6],
            },
            {
                text: '3 + 3 = ?',
                answer: '6',
                variants : [3, 6],
            },
            {
                text: '3 + 3 = ?',
                answer: '6',
                variants : [3, 6],
            },
            {
                text: '3 + 3 = ?',
                answer: '6',
                variants : [3, 6],
            },
            {
                text: '3 + 3 = ?',
                answer: '6',
                variants : [3, 6],
            },
        ];
    return Observable.of(questArr);
  }

}
