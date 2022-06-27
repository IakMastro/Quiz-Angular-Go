import {NgModule}                             from '@angular/core';
import {CommonModule}                         from '@angular/common';
import {HomeComponent}                        from './home.component';
import {QuizModalComponent, QuizModalContent} from './quiz-modal/quiz-modal.component';
import {NgbPaginationModule}                  from "@ng-bootstrap/ng-bootstrap";


@NgModule({
            declarations: [
              HomeComponent,
              QuizModalComponent,
              QuizModalContent
            ],
            imports: [
              CommonModule,
              NgbPaginationModule,
            ]
          })
export class HomeModule {}
