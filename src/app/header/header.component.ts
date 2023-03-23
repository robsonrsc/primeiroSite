import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  descricao="";


constructor(

  public servicoCarrinho : CarrinhoService,
  private router: Router
){

}
  ngOnInit(): void {
  }

pesquisar(){
  if(this.descricao){
    this.router.navigate(["produtos"],{queryParams:{descricao:this.descricao}})
    return;

  }
  this.router.navigate(["produtos"])

}

}
