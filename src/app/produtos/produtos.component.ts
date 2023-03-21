import { Component, OnInit } from '@angular/core';
import { ProdutoServiceService } from '../produto-service.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produtos  : IProduto [] | undefined  ;

  constructor (

    private produtoService: ProdutoServiceService
  ){}

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll ();
    
  }


}
