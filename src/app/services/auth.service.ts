import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Acesso } from '../models/acesso.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  realizarLogin(user : Acesso) : Observable<User> {
    //return this.http.post<User>("/api/auth.php", {username, password});

    if (user.email != "vitor@teste.com") {
      //return Observable.throw("User inválido");
      return of(null);
    }

    let userLogado = new User();
    userLogado.id = 1;
    userLogado.email = user.email;
    userLogado.nome = "Vitor";
    userLogado.token= "AISNFIOSANFIOASNEWET45252332FSDFSS";
    

    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(userLogado));

    return of(userLogado);
  }

  getUsuarioLogado() : User {
    let user = localStorage.getItem("user");
    if (!user) {
      return null;
    }

    let userJson = JSON.parse(user);
    let userLogado = new User();
    userLogado.id = userJson.id;
    userLogado.email = userJson.email;
    userLogado.nome = userJson.nome;
    userLogado.token= userJson.nome;

    return userLogado;


  }
}
