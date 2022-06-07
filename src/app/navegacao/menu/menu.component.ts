import { Component, OnInit } from '@angular/core';
import { CarrinhoComponent } from 'src/app/produtos/carrinho/carrinho.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public produtos : any = [];
  public totalItem : number = 0;

  constructor(private carrinhoComponent : CarrinhoComponent) { }

  ngOnInit(): void {
    this.carrinhoComponent.getProdutos()
    .subscribe(res=>{
      this.produtos = res;
      this.totalItem = this.carrinhoComponent.getPrecoTotal();
  })

}
}
