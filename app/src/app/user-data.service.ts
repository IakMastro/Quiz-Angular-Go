import {Injectable}     from '@angular/core';
import {UserData}       from "../interfaces/UserData";
import {USER_DATA}      from "./mock-data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData: UserData = USER_DATA;
  getUserData(): Observable<UserData> {
    return of(this.userData);
  }

  constructor() { }

  updateUserData(userData: UserData) {
    this.userData = userData;
  }
}
