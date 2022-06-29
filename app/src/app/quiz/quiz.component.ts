import {Component, OnInit}        from '@angular/core';
import {QuizService}              from "../quiz.service";
import {Quiz}                     from "../../interfaces/Quiz";
import {timer}                    from "rxjs";
import {NavigationExtras, Router} from "@angular/router";

@Component({
             selector: 'app-quiz',
             templateUrl: './quiz.component.html',
             styleUrls: ['./quiz.component.scss']
           })
export class QuizComponent implements OnInit {
  quiz: Quiz;
  countdown: number;
  currentQuestion: number;

  constructor(private quizService: QuizService, private router: Router) {
    this.quiz = {
      questions: [],
      selectedAnswerIndex: []
    }

    this.countdown = 10;
    this.currentQuestion = 0;
    timer(5, 1000)
      .subscribe(() => {
        this.countdown--;

        if (this.countdown <= 0) {
          this.countdown = 10;
          this.quiz.selectedAnswerIndex[this.currentQuestion] = -1;
          this.currentQuestion++;
        }
      });
  }

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe(quiz => {
      this.quiz = quiz;
      this.quiz.selectedAnswerIndex = [];
    });
  }

  selectAnswer(answer: string) {
    this.quiz.selectedAnswerIndex[this.currentQuestion] = this.quiz.questions[this.currentQuestion].answers.indexOf(answer);
    this.currentQuestion++;
    this.countdown = 10;
  }

  private calculateScore(): number {
    let score = 0;
    for (let i = 0; i < this.quiz.questions.length; i++) {
      if (this.quiz.selectedAnswerIndex[i] === this.quiz.questions[i].correct) {
        score++;
      }
    }
    return score;
  }

  submit(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        score: this.calculateScore()
      }
    };

    this.router.navigate(['/'], navigationExtras);
  };
}
