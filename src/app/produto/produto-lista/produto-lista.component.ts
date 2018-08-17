import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos$ : Observable<Produto[]>;

  constructor(private produtoService : ProdutoService, private router: Router) { }

  ngOnInit() {
    this.produtos$ = this.produtoService.lista()
  }

  editar(produto: Produto) {
    debugger;
    this.router.navigate([
      "produto", produto.id, "edit"
    ]);
  }
}
