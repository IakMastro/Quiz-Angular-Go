import { Injectable }   from '@angular/core';
import {Observable, of} from "rxjs";
import {Quiz}           from "../interfaces/Quiz";
import {QUIZ}         from "./mock-data";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuiz(): Observable<Quiz> {
    return of(QUIZ);
  }

  constructor() { }
}
