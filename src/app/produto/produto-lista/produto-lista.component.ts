import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    
  }

  teste() {
    debugger;
    this.produtoService.lista()
      .subscribe(p => {
        console.log(p);
      });
  }

}
