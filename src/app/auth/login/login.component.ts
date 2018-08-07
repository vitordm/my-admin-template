import { Component, OnInit, Input } from '@angular/core';
import { Acesso } from '../acesso';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() acesso: Acesso;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { 
    this.acesso = { email: null, password: null };
  }

  ngOnInit() {
    if (this.auth.isLogged) {
      this.router.navigate(["/"]);
    }
  }

  logar(event: Event) {
    event.preventDefault();
    if (!this.acesso.email) {
      return;
    }

    this.auth.realizarLogin(this.acesso)
      .subscribe((user) => {
        console.log(user);
        if (user) {
          this.router.navigate(['home']);
        }

      }, (e) => {
        console.log(e);
      })
  }

}
