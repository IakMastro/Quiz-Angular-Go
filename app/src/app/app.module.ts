import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule}                       from './app-routing.module';
import {AppComponent}                           from './app.component';
import {NgbModule}                              from '@ng-bootstrap/ng-bootstrap';
import {FormsModule}                            from "@angular/forms";
import {AngularFireModule}                      from "@angular/fire/compat";
import {environment}                            from "../environments/environment";
import {AngularFireAuthModule}                  from "@angular/fire/compat/auth";
import {firebase, firebaseui, FirebaseUIModule} from "firebaseui-angular";
import {HomeModule}                             from "./home/home.module";
import {HttpClientModule}                       from "@angular/common/http";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              NgbModule,
              FormsModule,
              HttpClientModule,
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,
              FirebaseUIModule.forRoot(firebaseUiAuthConfig)
            ],
            providers: [
              HomeModule
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {}
