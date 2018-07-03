import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  isLogged$: Observable<boolean>;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isLogged$ = this.auth.isLogged();
  }

}
