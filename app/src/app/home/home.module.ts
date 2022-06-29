import {NgModule}                             from '@angular/core';
import {CommonModule}                         from '@angular/common';
import {HomeComponent}                       from './home.component';
import {NgbAlertModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
            declarations: [
              HomeComponent,
            ],
            imports: [
              CommonModule,
              NgbPaginationModule,
              NgbAlertModule,
            ]
          })
export class HomeModule {}
