import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './_component/form-group/form-group.component';
import { FormControlComponent } from './_component/form-control/form-control.component';
import { FormArrayComponent } from './_component/form-array/form-array.component';
import { UsersComponent } from './_component/users/users.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    FormControlComponent,
    FormArrayComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
