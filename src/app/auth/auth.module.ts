import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports:[
    LoginComponent,
    FormsModule
  ]
})
export class AuthModule { }
