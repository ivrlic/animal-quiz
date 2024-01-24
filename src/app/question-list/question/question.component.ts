import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() answers: string[] = [];
  @Input() correctAnswer: string = '';
  // emitting is clicked answer correct
  @Output() answerSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectedAnswer: string = '';

  constructor() {}

  ngOnInit(): void {}

  onAnswerClick(answer: string): void {
    this.selectedAnswer = answer;
    const isCorrect = answer === this.correctAnswer;
    // after correct click timeout set for better user experience
    setTimeout(() => {
      this.answerSelected.emit(isCorrect);
    }, 500);
  }

  // set button style depending if it's correct or wrong guess (after clicked)
  getButtonClass(answer: string): any {
    return {
      answer: true,
      'correct-guess':
        this.selectedAnswer === this.correctAnswer &&
        this.selectedAnswer === answer,
      'wrong-guess':
        this.selectedAnswer !== this.correctAnswer &&
        this.selectedAnswer === answer,
    };
  }
}
