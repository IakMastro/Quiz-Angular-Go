import {Component, OnInit} from '@angular/core';
import {AngularFireAuth}   from "@angular/fire/compat/auth";
import {UserData}          from "../../interfaces/UserData";
import {UserDataService}   from "../user-data.service";

@Component({
             selector: 'app-home',
             templateUrl: './home.component.html',
             styleUrls: ['./home.component.scss']
           })
export class HomeComponent implements OnInit {
  userData: UserData;

  constructor(public fbAuth: AngularFireAuth, private userDataService: UserDataService) {
    this.userData = {
      id: "",
      totalScore: 0,
      maxPoints: 0
    };
  }

  getUserData(): void {
    this.userDataService.getUserData().subscribe(userData => {
      this.userData = userData;
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
