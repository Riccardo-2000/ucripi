import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
