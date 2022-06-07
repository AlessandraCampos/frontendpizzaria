import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from 'src/app/navegacao/Pageable';
import { ProdutoserviceService } from 'src/app/services/produtoservice.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {
  public produtos: Produto[] = [];
 
  constructor( private http: HttpClient, private produtoService: ProdutoserviceService) { }

  ngOnInit(): void {
    this.listarprodutos();
  }

  listarprodutos(){
   return this.produtoService.obterProdutos().subscribe(res=>{
     this.produtos = res.content;
   })
  };
   
 
  }


