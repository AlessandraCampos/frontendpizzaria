import { Routes } from "@angular/router";
import { CheckoutComponent } from "./navegacao/checkout/checkout.component";
import { FinalizarComponent } from "./navegacao/finalizar/finalizar.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { CadastroprodutoComponent } from "./produtos/cadastroproduto/cadastroproduto.component";
import { CarrinhoComponent } from "./produtos/carrinho/carrinho.component";
import { ListarprodutosComponent } from "./produtos/listarprodutos/listarprodutos.component";
import { CadastroComponent } from "./usuarios/cadastro/cadastro.component";
import { LoginComponent } from "./usuarios/login/login.component";

export const rootRouterConfig:Routes=[

    {path:'',redirectTo :'/home',pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'registre-se',component: CadastroComponent},
    {path:'produtos',component: ListarprodutosComponent},
    {path:'cadastroprodutos',component: CadastroprodutoComponent},
    {path:'carrinho',component: CarrinhoComponent},
    {path:'checkout',component: CheckoutComponent},
    {path:'finalizar',component: FinalizarComponent},

];