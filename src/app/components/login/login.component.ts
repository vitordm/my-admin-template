import { Component, OnInit, Input } from '@angular/core';
import { Acesso } from '../../models/acesso.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() acesso : Acesso

  constructor() { }

  ngOnInit() {
    this.acesso = new Acesso();
  }

  loginUser(event: Event) {
    event.preventDefault();

    console.log(this.acesso);

  }

}
