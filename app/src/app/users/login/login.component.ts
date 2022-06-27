import { Component, OnInit } from '@angular/core';
import LoginUserDto          from "../../dto/user/login.user.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginUserDto;

  constructor() {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

}
