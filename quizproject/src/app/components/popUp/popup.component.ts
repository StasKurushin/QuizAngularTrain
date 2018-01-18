import {Component, EventEmitter, OnInit, Output,} from '@angular/core';
import {isBoolean} from "util";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

@Output() onShowRes = new EventEmitter<boolean>();
@Output() onClosePop = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }



}
