import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list';
import { Router } from '@angular/router';
import { ListaService } from '../services/lista.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


  productList:ListItem[];
  selectList:ListItem[];
  aggiorna:boolean;

  constructor(private listaService: ListaService,private router: Router) { 
    this.productList=this.listaService.getlista();
    
    
  }

  
  aggiungi(id:number){
    this.listaService.setSelected(id);
    this.selectList=this.listaService.getSelectedList();

  }

  rimuovi(id:number){
    this.listaService.removeSelected(id);
  }

  annulla(id:number){
    this.listaService.annulla(id);
  }



  getSelectList(){
    this.selectList=this.listaService.getSelectedList();
  }


  ngOnInit(): void {
    this.aggiorna=false;
  }


}
