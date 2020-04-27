import { Injectable } from '@angular/core';
import { ListItem } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private productList:ListItem[]=[
    {Id:1,Nome:"PROSCIUTTO",Descrizione:"di parma",Prezzo: 10, Quantita:0, Selected:false, message:""},
    {Id:2,Nome:"pera",Descrizione:"gialla",Prezzo: 3, Quantita:0, Selected:false, message:""},
  ]
  item:ListItem;
  getlista():ListItem[]{
    return this.productList;
  }
  
  setSelected(id:number){
    this.productList.find(item=>item.Id==id).Selected=true;
    this.productList.find(item=>item.Id==id).message="";

  }

  removeSelected(id:number){
    this.productList.find(item=>item.Id==id).Selected=false;
    this.productList.find(item=>item.Id==id).message="rimozione in corso...";
  }

  annulla(id:number){
    this.productList.find(item=>item.Id==id).Selected=true;
    this.productList.find(item=>item.Id==id).message="";
  }

  getSelectedList(){
    return this.productList.filter(product => product.Selected ==true);
  }

  


  


  constructor() { }
}
