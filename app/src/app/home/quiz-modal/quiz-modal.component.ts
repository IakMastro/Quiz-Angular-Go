import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Question, Quiz}           from "../../../interfaces/Quiz";
import {QuizService}              from "../../quiz.service";

@Component({
             selector: 'app-quiz-content',
             templateUrl: './quiz-modal-content.component.html'
           })
export class QuizModalContent {
  @Input() questions: Question[];
  page: number = 1;

  constructor(public activeModal: NgbActiveModal) {
    this.questions = [];
  }
}

@Component({
             selector: 'app-quiz-modal',
             templateUrl: './quiz-modal.component.html',
             styleUrls: ['./quiz-modal.component.scss']
           })
export class QuizModalComponent implements OnInit {
  quiz: Quiz;

  constructor(private modalService: NgbModal, private quizService: QuizService) {
    this.quiz = {
      questions: [],
    };
  }

  getQuiz(): void {
    this.quizService.getQuiz().subscribe(quiz => {
      this.quiz = quiz;
    });
  }

  ngOnInit() {
    this.getQuiz();
  }

  open() {
    const modalRef = this.modalService.open(QuizModalContent);
    modalRef.componentInstance.questions = this.quiz.questions;
  }
}
