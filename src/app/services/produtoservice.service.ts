import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '../navegacao/Pageable';

@Injectable({
  providedIn: 'root'
})
export class ProdutoserviceService {
  UrlProdService = "http://localhost:8080/produtos";
  httpOptions = {
   headers: new HttpHeaders({
       'Content-Type':'application/json'
   })
  };

  constructor(private http: HttpClient) { }

  public obterProdutos() : Observable <Pageable>{
    return this.http
     .get<Pageable> (this.UrlProdService) ;

 }
}
