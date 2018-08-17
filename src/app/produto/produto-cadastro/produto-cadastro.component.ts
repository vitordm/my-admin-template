import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  public mensagem : string = '';

  model : any = {};

  @Input() produto : Produto;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    debugger;
    console.log('SUCCESS!! :-)\n\n');
  }

}
