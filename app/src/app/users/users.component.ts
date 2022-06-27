import {Component, OnInit} from '@angular/core';
import LoginUserDto        from "../dto/user/login.user.dto";

@Component({
             selector: 'app-users',
             templateUrl: './users.component.html',
             styleUrls: ['./users.component.scss']
           })
export class UsersComponent implements OnInit {
  user: LoginUserDto;
  register: boolean;

  constructor() {
    this.user = {
      email: '',
      password: ''
    }
    this.register = true;
  }

  ngOnInit(): void {
  }

  toggleRegister() {
    this.register = !this.register;
  }
}
