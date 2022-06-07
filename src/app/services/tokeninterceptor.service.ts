import { Injectable, Injector, Type } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../usuarios/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{
  [x: string]: any;

  constructor(private loginComponent: LoginComponent) {
    
    
  }

  intercept(
  
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //const auth = this.injector.get(LoginComponent);
   // const authToken = auth.getToken;
   const token  = this.loginComponent.getToken();
   if (token) {
    request = request.clone({
      headers: request.headers.set('Authorization','Bearer ' + token),
    });
  }
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokeninterceptorService,
  multi: true,
};