import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list';
import { Router } from '@angular/router';
import { ListaService } from '../services/lista.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['../../css.css']
})
export class ListaComponent implements OnInit {

  quantitaForm: FormGroup;
  productList:ListItem[];
  selectList:ListItem[];
  aggiorna:boolean;

  constructor(private listaService: ListaService,private router: Router, private fb: FormBuilder) { 
    this.productList=this.listaService.getlista();
    
    this.quantitaForm = this.fb.group({
      quantita: ''
     
    });
    
  }

  
  aggiungi(id:number, quantita:number){
    this.listaService.setSelected(id, quantita);
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
