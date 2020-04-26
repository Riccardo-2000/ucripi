import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PesceComponent } from './pesce/pesce.component';
import { UovaComponent } from './uova/uova.component';
import { VinoComponent } from './vino/vino.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrazioneComponent,
    ListaComponent,
    BlogComponent,
    ContactComponent,
    PesceComponent,
    UovaComponent,
    VinoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
