import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestContentService } from "./services/questContent/quest-content.service";
import {RouterModule} from "@angular/router";
import { QuestionComponent } from './components/question/question.component';
import { PopupComponent } from './components/popUp/popup.component';


@NgModule({
  declarations: [
    AppComponent,
      QuizComponent,
      QuestionComponent,
      PopupComponent
  ],
  imports: [
    BrowserModule
    /*RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }*/
  ],
  providers: [QuestContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
