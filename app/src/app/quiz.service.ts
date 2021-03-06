import {Injectable}     from '@angular/core';
import {Observable, of} from "rxjs";
import {Question, Quiz} from "../interfaces/Quiz";
import {HttpClient}     from "@angular/common/http";

@Injectable({
              providedIn: 'root'
            })
export class QuizService {
  private quizUrl = 'http://localhost:8080/';

  getQuiz(): Observable<Quiz> {
    return this.http.get<Quiz>(this.quizUrl);
  }

  constructor(private http: HttpClient) { }
}
