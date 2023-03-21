import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  itensCarrinho: IProdutoCarrinho []=[];
  total=0;
  constructor( 
    public carrinhoService : CarrinhoService,
    private router : Router
  ){

  }

  ngOnInit(): void {
     this.itensCarrinho = this.carrinhoService.ObtemCarrinho();
     this.totalCompras();
  }

  removeProdutoCarrinho(produtoId: number){

    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.totalCompras();
  }

  totalCompras (){ 
    this.total  = this.itensCarrinho.reduce ((prev, curr)=> prev +(curr.preco*curr.quantidade),0)
  }

  comprar (){

    alert ("Parabens pela compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
