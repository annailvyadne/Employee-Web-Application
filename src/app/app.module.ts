import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpDeleteComponent } from './emp-delete/emp-delete.component';
import { EmpMainComponent } from './emp-main/emp-main.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpCreateComponent,
    EmpEditComponent,
    EmpDeleteComponent,
    EmpMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
