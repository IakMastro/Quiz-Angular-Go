import {Component, OnInit} from '@angular/core';
import {AngularFireAuth}   from "@angular/fire/compat/auth";
import {UserData}          from "../../interfaces/UserData";
import {UserDataService}          from "../user-data.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
             selector: 'app-home',
             templateUrl: './home.component.html',
             styleUrls: ['./home.component.scss']
           })
export class HomeComponent implements OnInit {
  userData: UserData;
  score?: number;

  constructor(
    public fbAuth: AngularFireAuth,
    private userDataService: UserDataService,
    private router: Router
  ) {
    this.userData = {
      id: "",
      totalScore: 0,
      maxPoints: 0
    };

    const navigation = this.router.getCurrentNavigation();
    if (navigation != null) {
      const state = navigation.extras.state as {
        score: number
      }
      this.score = state.score;
    }
  }

  getUserData(): void {
    this.userDataService.getUserData().subscribe(userData => {
      this.userData = userData;
    });
  }

  ngOnInit(): void {
    this.getUserData();

    if (this.score != undefined) {
      this.userData.totalScore += this.score;
      this.userData.maxPoints += 5;
      this.userDataService.updateUserData(this.userData);
    }
  }

  giveQuiz() {
    this.router.navigate(['/quiz']);
  }
}
