import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder :FormBuilder,
    private http: HttpClient,
    private router: Router,) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      nome:['',Validators.required],
      cpf:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      perfilId:2,
    });
  }

  submit(){
    this.http.post("http://localhost:8080/usuarios/cadastrar",
    this.form.getRawValue(),{
      responseType: 'text',
      withCredentials:false, observe:'response'})
    .subscribe(res=> 
      {let token = JSON.parse(JSON.stringify(res.body));
        return this.router.navigate(['/home'])
      });
    }

}
