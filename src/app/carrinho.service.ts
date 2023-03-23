import { Injectable } from '@angular/core';
import { IProdutoCarrinho, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[]=[];
  constructor() { }

  adicionarAoCarrinho (produto:IProdutoCarrinho){
    
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
     

  }

  ObtemCarrinho (){
   this.itens = JSON.parse(localStorage.getItem ("carrinho") || "[]");
   return this.itens;
    
  }

  limparCarrinho (){

    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho (produtoID : number){
    this.itens = this.itens.filter(item => item.id !== produtoID);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))




  }

}
