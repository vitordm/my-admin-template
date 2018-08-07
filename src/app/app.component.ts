import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  isLogged : boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isLogged = this.auth.isLogged;
    this.auth.loginRealizado.subscribe(login => this.isLogged = login);
  }

}
