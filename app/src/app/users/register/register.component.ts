import {Component, OnInit} from '@angular/core';
import RegisterUserDto     from "../../dto/user/register.user.dto";

@Component({
             selector: 'app-register',
             templateUrl: './register.component.html',
             styleUrls: ['./register.component.scss']
           })
export class RegisterComponent implements OnInit {
  user: RegisterUserDto;

  constructor() {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }
}
