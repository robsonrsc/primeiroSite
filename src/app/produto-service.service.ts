import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  produtos1: IProduto[] = produtos;

  constructor() { }

  getAll (){
    return this.produtos1;
  }

  getOne (produtoID: number) {

    return this.produtos1.find(produto =>produto.id = produtoID);
  }
}
