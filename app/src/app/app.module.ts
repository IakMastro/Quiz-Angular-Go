import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { RegisterComponent } from './users/register/register.component';
import { NgbModule }         from '@ng-bootstrap/ng-bootstrap';
import {FormsModule}         from "@angular/forms";
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UsersComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              NgbModule,
              FormsModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }