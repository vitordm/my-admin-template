import { Component, OnInit, Input } from '@angular/core';
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

  @Input() produto : Produto;

  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    if (!this.produto) {
      this.produto = {
        Id: 0,
        Titulo: "",
        Valor: 0
      };
    }
  }

  onSubmit() {
    try {
      this.modelToProduto();
      if (this.produto.Id == 0) {
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
    this.produto.Titulo = this.model.titulo;

    if (this.model.valor) {
      try {
        this.produto.Valor = parseFloat(this.model.valor);  
      } catch (error) {
        throw "Dados inválidos para o valor!";
      }
      
    }
      
  }

}
