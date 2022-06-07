import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { LoginComponent } from './usuarios/login/login.component';
import { CadastroComponent } from './usuarios/cadastro/cadastro.component';
import { CadastroprodutoComponent } from './produtos/cadastroproduto/cadastroproduto.component';
import { ListarprodutosComponent } from './produtos/listarprodutos/listarprodutos.component';
import { CheckoutComponent } from './navegacao/checkout/checkout.component';
import { FinalizarComponent } from './navegacao/finalizar/finalizar.component';
import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProvider } from './services/tokeninterceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    CadastroprodutoComponent,
    ListarprodutosComponent,
    CheckoutComponent,
    FinalizarComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig,{useHash:false})],
  ],
  providers: [
    AuthInterceptorProvider,
    LoginComponent,
    CarrinhoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
