import {Component, OnInit} from '@angular/core';
import LoginUserDto        from "../dto/user/login.user.dto";

@Component({
             selector: 'app-users',
             templateUrl: './users.component.html',
             styleUrls: ['./users.component.scss']
           })
export class UsersComponent implements OnInit {
  active: number;

  constructor() {
    this.active = 1;
  }

  ngOnInit(): void {
  }
}
