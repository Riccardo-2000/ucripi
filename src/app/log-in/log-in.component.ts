import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

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
