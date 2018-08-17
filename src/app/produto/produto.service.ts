import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public lista(): Observable<Produto[]> {
    return this.http.get<Produto[]>("/api/Produto/");
  }

  public get(id: number): Observable<Produto> {
    return this.http.get<Produto>("/api/Produto/" + id);
  }

  public add(produto: Produto) {
    return this.http.post("/api/Produto", produto);
  }

  public edit(produto: Produto) {
    return this.http.put(`/api/Produto/${produto.Id}`, produto);
  }
}
