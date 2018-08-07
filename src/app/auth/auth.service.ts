import { Injectable, EventEmitter } from '@angular/core';
import { Acesso } from './acesso';
import { HttpClient } from "@angular/common/http";
import { of, Observable } from 'rxjs';

import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginRealizado = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  realizarLogin(user: Acesso): Observable<User> {
    //return this.http.post<User>("/api/auth.php", {username, password});

    if (user.email != "vitor@teste.com") {
      //return Observable.throw("User inválido");
      this.loginRealizado.emit(false);
      return of(null);
    }

    let userLogado: User = {
      id: 1,
      email: user.email,
      nome: "Vitor",
      token: "AISNFIOSANFIOASNEWET45252332FSDFSS",
    }


    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(userLogado));
    this.loginRealizado.emit(true);
    return of(userLogado);
  }

  getUsuarioLogado(): User {
    let user = localStorage.getItem("user");
    if (!user) {
      return null;
    }

    let userLogado = JSON.parse(user) as User;
    //console.log( {name: "UserJSON", field:userJson} );
    //let userLogado: (User)userJson;
    /*userLogado.id = userJson.id;
    userLogado.email = userJson.email;
    userLogado.nome = userJson.nome;
    userLogado.token = userJson.nome;*/
    return userLogado;
  }

  get isLogged(): boolean {
    const user = this.getUsuarioLogado();
    //return of(user !== null);
    return user !== null;
  }
}
