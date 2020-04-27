import { Injectable } from '@angular/core';
import { ListItem } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private productList:ListItem[]=[
    {Id:1, Image:"../../assets/immagini/img-ProdottiLista/img-albicocche.jpg", Nome:"ALBICOCCHE",Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:2, Image:"../../assets/immagini/img-ProdottiLista/img-ananas.jpg", Nome:"ANANAS", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:3, Image:"../../assets/immagini/img-ProdottiLista/img-mela.jpg", Nome:"MELA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:4, Image:"../../assets/immagini/img-ProdottiLista/img-avocado.jpg", Nome:"AVOCADO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:5, Image:"../../assets/immagini/img-ProdottiLista/img-melagrana.jpg", Nome:"MELAGRANA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:6, Image:"../../assets/immagini/img-ProdottiLista/img-pesca.jpg", Nome:"PESCA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:7, Image:"../../assets/immagini/img-ProdottiLista/img-pompelmo.jpg", Nome:"POMPELMO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:8, Image:"../../assets/immagini/img-ProdottiLista/img-banana.jpg", Nome:"BANANA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:9, Image:"../../assets/immagini/img-ProdottiLista/img-carota.jpg", Nome:"CAROTA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:10, Image:"../../assets/immagini/img-ProdottiLista/img-insalata.jpg", Nome:"INSALATA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:11, Image:"../../assets/immagini/img-ProdottiLista/img-melanzana.jpg", Nome:"MELANZANA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:12, Image:"../../assets/immagini/img-ProdottiLista/img-patata.jpg", Nome:"PATATA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:13, Image:"../../assets/immagini/img-ProdottiLista/img-pomodoro.jpg", Nome:"POMODORO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:14, Image:"../../assets/immagini/img-ProdottiLista/img-sedano.jpg", Nome:"SEDANO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:15, Image:"../../assets/immagini/img-ProdottiLista/img-zucca.jpg", Nome:"ZUCCA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:16, Image:"../../assets/immagini/img-ProdottiLista/img-cipolla.jpg", Nome:"CIPOLLA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:17, Image:"../../assets/immagini/img-ProdottiLista/img-merluzzo.jpg", Nome:"MERLUZZO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:18, Image:"../../assets/immagini/img-ProdottiLista/img-scorfano.jpg", Nome:"SCORFANO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:19, Image:"../../assets/immagini/img-ProdottiLista/img-spigola.jpg", Nome:"SPIGOLA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:20, Image:"../../assets/immagini/img-ProdottiLista/img-sarago.jpg", Nome:"SARAGO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:21, Image:"../../assets/immagini/img-ProdottiLista/img-wurstel.jpg", Nome:"WURSTEL", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:22, Image:"../../assets/immagini/img-ProdottiLista/img-prosciutto.jpg", Nome:"PROSCIUTTO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:23, Image:"../../assets/immagini/img-ProdottiLista/img-pollo.jpg", Nome:"POLLO", Prezzo: 1.25, Quantita:1, Selected:false, message:""},
    {Id:24, Image:"../../assets/immagini/img-ProdottiLista/img-bistecca.jpg", Nome:"BISTECCA", Prezzo: 1.25, Quantita:1, Selected:false, message:""},

  ]
  item:ListItem;
  getlista():ListItem[]{
    return this.productList;
  }
  
  setSelected(id:number, quantita: number){
    this.productList.find(item=>item.Id==id).Selected=true;
    this.productList.find(item=>item.Id==id).Quantita=quantita;
    this.productList.find(item=>item.Id==id).message="";

  }

  removeSelected(id:number){
    this.productList.find(item=>item.Id==id).Selected=false;
    this.productList.find(item=>item.Id==id).message="    X";
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
