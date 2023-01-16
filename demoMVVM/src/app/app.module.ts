import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PerduComponent } from './pages/perdu/perdu.component';
import { GestionCompteComponent } from './ViewModels/gestion-compte/gestion-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerduComponent,
    GestionCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
