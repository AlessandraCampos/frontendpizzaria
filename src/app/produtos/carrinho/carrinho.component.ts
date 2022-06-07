import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public itemCarrinho : any =[]
  public listaProduto = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  ngOnInit(): void {
    
  }
  getProdutos(){
    return this.listaProduto.asObservable();
  }

  setProduto(produto : any){
    this.itemCarrinho.push(...produto);
    this.listaProduto.next(produto);
  }
  adicionarItemCarrinho(produto : any){
    this.itemCarrinho.push(produto);
    this.listaProduto.next(this.itemCarrinho);
    this.getPrecoTotal() ;
    console.log(this.itemCarrinho)
  }
  getPrecoTotal() : number{
    let total = 0;
    this.itemCarrinho.map((a:any)=>{
      total += a.total;
    })
    return total;
  }
  removeItemCarrinho(produto: any){
    this.itemCarrinho.map((a:any, index:any)=>{
      if(produto.id=== a.id){
        this.itemCarrinho.splice(index,1);
      }
    })
    this.listaProduto.next(this.itemCarrinho);
  }
  esvaziarCarrinho(){
    this.itemCarrinho = []
    this.listaProduto.next(this.listaProduto);
  }
}

