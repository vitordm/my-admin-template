import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { AuthModule } from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    ProdutoRoutingModule,
    FormsModule
  ],
  declarations: [
    ProdutoCadastroComponent, 
    ProdutoListaComponent
  ]
})
export class ProdutoModule { }
