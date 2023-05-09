import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './componentes/mi-componente/mi-componente.component';
import { ComponenteHijoComponent } from './componentes/componente-hijo/componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ComponenteHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
