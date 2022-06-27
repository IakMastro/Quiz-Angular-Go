import {Injectable}     from '@angular/core';
import {UserData}       from "../interfaces/UserData";
import {USER_DATA}      from "./mock-data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  getUserData(): Observable<UserData> {
    return of(USER_DATA);
  }

  constructor() { }
}
