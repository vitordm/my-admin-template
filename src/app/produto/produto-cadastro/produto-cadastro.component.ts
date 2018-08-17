import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  public mensagemError : string = '';
  public mensagemSucesso : string = '';

  model : any = {};
  produto : Produto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService : ProdutoService
  ) { }

  ngOnInit() {
    let produto = this.activatedRoute.snapshot.data.produto;

    if (produto) {
      this.produto = produto;
      this.model.titulo = this.produto.titulo;
      this.model.valor = this.produto.valor;
    } else {
      this.produto = {
        id: 0,
        titulo: "",
        valor: 0
      };
    }
  }

  onSubmit() {
    try {
      this.modelToProduto();
      if (this.produto.id == 0) {
        this.produtoService.add(this.produto)
          .subscribe(() => {
            this.mensagemSucesso = "Dados Salvos com sucesso!";
          }, 
          () => {
            this.mensagemError = "Erro ao salvar dados!"
          })
      } else {
        this.produtoService.edit(this.produto)
        .subscribe(() => {
          this.mensagemSucesso = "Dados Atualizados com sucesso!";
        }, 
        () => {
          this.mensagemError = "Erro ao atualizar dados!"
        })
      }
    } catch (error) {
      this.mensagemError = error;
    }
  
  }

  private modelToProduto(){

    let titulo = this.model.titulo;
    if (!titulo || !titulo.length)
      throw "Dados inválidos para o título!";
    this.produto.titulo = this.model.titulo;

    if (this.model.valor) {
      try {
        this.produto.valor = parseFloat(this.model.valor);  
      } catch (error) {
        throw "Dados inválidos para o valor!";
      }
      
    }
      
  }

}
