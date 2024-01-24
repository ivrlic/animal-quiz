import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'animal-quiz';
  questionsNum!: number;

  currentQuestionIndex: number = 0;
  totalScore: number = 0;
  totalCorrectAnswer: number = 0;

  showIntro: boolean = true;
  showQuestion: boolean = false;
  showResults: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  startQuiz(numInput: any): void {
    this.showIntro = false;
    this.showQuestion = true;
    // set the number of questions according input number
    this.questionsNum = numInput;
  }

  // start new game with restarting all values
  startNewQuiz() {
    this.currentQuestionIndex = 0;
    this.totalScore = 0;
    this.totalCorrectAnswer = 0;
    this.showIntro = true;
    this.showQuestion = false;
    this.showResults = false;
  }
}
