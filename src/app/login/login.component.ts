import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private listaUtenti: LoginService,private router: Router) { }

  login(username:string, password:string){
    
    this.listaUtenti.eseguiLogin(username,password);
    
  }

  loginS(username:string, password:string){
    //nei pulsanti/altro metodo
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('password', password);

    this.listaUtenti.eseguiLoginS();
  }

  registrati(){
    this.router.navigateByUrl("/registrazione");
  }

  ngOnInit(): void {
  }

}
