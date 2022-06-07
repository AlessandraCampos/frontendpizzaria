import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token='';
  form!: FormGroup;
  subRef$: Subscription = new Subscription;
  
 
  constructor(
    private formBuilder :FormBuilder,
    private http: HttpClient,
    private router: Router,
    ){}


  ngOnInit(): void {
    this.form= this.formBuilder.group({
      username:'',
      senha:''
    });
  }

  submit(): void {
    try
    {
      this.subRef$ = this.http.post('http://localhost:8080/auth', this.form.getRawValue(),
      {
        withCredentials:false, observe:'response'
      })
      .subscribe
      (res=>
        {          
          console.log(res.body);
           let token = JSON.parse(JSON.stringify(res.body)).token;
           console.log(JSON.parse(JSON.stringify(res.body)).token)
           console.log(token);
           localStorage.setItem('token', token);           
          return this.router.navigate(['/home'])
        }
      );
    } 
    catch
    {
      (_err: any)=> 
      {
        console.error('Erro ao logar',_err);
        console.log("Acesso negado");     
      }
    }
  }


getToken(){
  console.log("Este é o getToken"+  localStorage.getItem('token'));
  return  localStorage.getItem('token');
}



}
