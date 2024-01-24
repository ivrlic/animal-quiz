import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  @Input() questionsNum!: number;
  @Input() totalScore!: number;
  @Input() totalCorrectAnswer!: number;
}
