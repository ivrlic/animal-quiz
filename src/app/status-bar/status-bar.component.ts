import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent {
  @Input() questionsNum!: number;
  @Input() currentQuestionIndex!: number;

  // get current progress percentage
  progressPercentage(): number {
    return ((this.currentQuestionIndex + 1) / this.questionsNum) * 100;
  }
}
