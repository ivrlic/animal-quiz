import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list.component';

@NgModule({
  declarations: [QuestionListComponent, QuestionComponent],
  imports: [CommonModule],
  exports: [QuestionListComponent],
})
export class QuestionListModule {}
