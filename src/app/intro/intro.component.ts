import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  // output for emitting input number
  @Output() startQuiz: EventEmitter<void> = new EventEmitter<void>();
  // reactive form for input number validation
  introForm = new FormGroup({
    numInput: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
  });

  constructor() {}

  onStartQuiz(): void {
    // if form is valid emit input number
    if (this.introForm.valid) {
      const numInput: any = this.introForm.get('numInput')?.value;
      this.startQuiz.emit(numInput);
    }
  }
}
