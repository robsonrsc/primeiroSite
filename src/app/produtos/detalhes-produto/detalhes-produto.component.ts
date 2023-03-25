import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoServiceService } from 'src/app/produto-service.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutosComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade=1;

  constructor(private produtosService: ProdutoServiceService,
     private route: ActivatedRoute,
     private notificacaoService: NotificacaoService,
     private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {

    const routeParams=this.route.snapshot.paramMap;
    const produtoId=Number(routeParams.get("id"));
    this.produto=this.produtosService.getOne(produtoId);

  }

  adicionarAoCarrinho(){

    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto:IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade

    }
    this.carrinhoService.adicionarAoCarrinho(produto);

  }

}

