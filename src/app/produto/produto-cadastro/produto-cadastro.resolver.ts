import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Injectable({ providedIn: 'root' })
export class ProdutoCadastroResolver implements Resolve<Observable<Produto>> {

    constructor(private produtoService : ProdutoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> | Observable<Observable<Produto>> | Promise<Observable<Produto>> {
        const id = route.params.id;
        return this.produtoService.get(id);
    }
}