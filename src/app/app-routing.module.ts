import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ListaComponent } from './lista/lista.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PesceComponent } from './pesce/pesce.component';
import { UovaComponent } from './uova/uova.component';
import { VinoComponent } from './vino/vino.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pesce', component: PesceComponent },
  { path: 'uova', component: UovaComponent },
  { path: 'vino', component: VinoComponent }
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
