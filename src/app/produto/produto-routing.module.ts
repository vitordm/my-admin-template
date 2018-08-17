import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoCadastroResolver } from "./produto-cadastro/produto-cadastro.resolver";
import { AuthGuard } from "../auth/auth.guard";

const produtoRoutes: Routes = [
    {
        path: 'produtos',
        children:[
            { path: '', component: ProdutoListaComponent }
        ],
        canActivate: [AuthGuard]
    },
    { 
        path: "produto/:id/edit", 
        component: ProdutoCadastroComponent, 
        resolve: {
            produto: ProdutoCadastroResolver
        },
        canActivate: [AuthGuard]
    },
    { path: "produto/add", component: ProdutoCadastroComponent, canActivate: [AuthGuard]}
    
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule {

}