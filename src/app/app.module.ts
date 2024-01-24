import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionListModule } from './question-list/question-list.module';
import { ResultsComponent } from './results/results.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ResultsComponent,
    StatusBarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuestionListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
