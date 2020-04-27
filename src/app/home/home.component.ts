import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../css.css']
})
export class HomeComponent implements OnInit {

  constructor(private listaUtenti: LoginService,private router: Router) { }

  
  ngOnInit(): void {
  }

}
