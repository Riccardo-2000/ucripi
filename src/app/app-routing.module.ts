import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'lista', component: ListaComponent }
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
