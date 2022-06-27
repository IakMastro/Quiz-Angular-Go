import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule}                       from './app-routing.module';
import {AppComponent}                           from './app.component';
import {NgbModule}                              from '@ng-bootstrap/ng-bootstrap';
import {FormsModule}                            from "@angular/forms";
import {UsersModule}                            from "./users/users.module";
import {AngularFireModule}                      from "@angular/fire/compat";
import {environment}                            from "../environments/environment";
import {AngularFireAuthModule}                  from "@angular/fire/compat/auth";
import {firebase, firebaseui, FirebaseUIModule} from "firebaseui-angular";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              NgbModule,
              FormsModule,
              UsersModule,
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,
              FirebaseUIModule.forRoot(firebaseUiAuthConfig)
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {}
