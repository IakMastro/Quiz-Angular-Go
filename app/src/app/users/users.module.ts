import {NgModule}          from '@angular/core';
import {BrowserModule}     from "@angular/platform-browser";
import {UsersComponent}    from "./users.component";
import {LoginComponent}    from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NgbModule}         from "@ng-bootstrap/ng-bootstrap";
import {FormsModule}       from "@angular/forms";


@NgModule({
            declarations: [
              UsersComponent,
              LoginComponent,
              RegisterComponent
            ],
            exports: [
              UsersComponent
            ],
            imports: [
              BrowserModule,
              NgbModule,
              FormsModule
            ]
          })
export class UsersModule {}
