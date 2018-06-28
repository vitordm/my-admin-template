import { Component, OnInit, Input } from '@angular/core';
import { Acesso } from '../../models/acesso.models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() acesso : Acesso

  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.acesso = new Acesso();
  }

  logar(event: Event) {
    event.preventDefault();
    if (!this.acesso.email) {
      return;
    }

    this.auth.realizarLogin(this.acesso)
      .subscribe((user) =>  {
        console.log(user);
        if (user) {
          this.router.navigate(["home"]);
        }
        
      }, (e) => {
        console.log(e);
      })
  }

}
