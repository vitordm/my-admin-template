import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  public add(produto : Produto) {
    return this.http.post("/api/Produto", produto);
  }
}
