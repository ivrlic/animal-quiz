import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import { FetchService } from '../service/fetch.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent {
  @Input() questionsNum!: any;
  @Input() currentQuestionIndex!: number;
  @Input() totalScore!: number;
  @Input() totalCorrectAnswer!: number;

  // output to emit current index
  @Output() handleCurrentQI: EventEmitter<number> = new EventEmitter<number>();
  // output to emit total score
  @Output() handleTotalScore: EventEmitter<number> = new EventEmitter<number>();
  // output to emit total of correct answers
  @Output() handleTotalCA: EventEmitter<number> = new EventEmitter<number>();
  // output to emit is resultsComponent to be shown
  @Output() handleShowResults: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  // output to emit is questionListComponent to be shown
  @Output() handleShowQuestion: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  questionsArray: any[] = [];
  questionScore: number = 3;
  imgUrl: string = '';

  constructor(
    private quizService: QuizService,
    private fetchService: FetchService
  ) {}

  ngOnInit(): void {
    // genereting new array of questions (length = questionsNum (input number) )
    this.questionsArray = this.quizService.generateQuestionsArray(
      this.questionsNum
    );
    // getting new url of animal image (set as a backgroundImg in html)
    this.getImgUrl();
  }

  // logic when clicked on answer button
  onAnswerClick(isCorrect: boolean): void {
    // if answer is correct
    if (isCorrect) {
      this.showNextQuestion();
      this.totalScore += this.questionScore;
      this.handleTotalScore.emit(this.totalScore);

      // if the first guess is correct
      if (this.questionScore === 3) {
        this.totalCorrectAnswer++;
        this.handleTotalCA.emit(this.totalCorrectAnswer);
      }

      this.questionScore = 3;
      // if answer is wrong
    } else {
      this.questionScore--;
    }
  }

  private showNextQuestion(): void {
    // show next question
    if (this.currentQuestionIndex < this.questionsArray.length - 1) {
      this.currentQuestionIndex++;
      this.handleCurrentQI.emit(this.currentQuestionIndex);
      this.getImgUrl();
      // quiz ended - hide questionListComponent and show resultsComponent
    } else {
      this.handleShowQuestion.emit(false);
      this.handleShowResults.emit(true);
    }
  }

  // fetching url of an animal img using fetchService
  private getImgUrl() {
    let animal = this.questionsArray[this.currentQuestionIndex].correctAnswer;
    this.fetchService.getRandomImg(animal).subscribe((data) => {
      this.imgUrl = data.urls.regular;
    });
  }

  handleChangeImg() {
    this.getImgUrl();
  }
}
