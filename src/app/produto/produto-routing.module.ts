import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

const produtoRoutes: Routes = [
    {
        path: 'produtos',
        children:[
            { path: '', component: ProdutoListaComponent }
        ],
    },
    {
        path: "produto",
        children:[
            {
                path:'add',
                component: ProdutoCadastroComponent
            },
            {
                path:'edit',
                component: ProdutoCadastroComponent
            }
        ]
    }
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