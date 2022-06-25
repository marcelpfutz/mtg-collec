import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './pages/cards/cards.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ColecaoComponent } from './pages/colecao/colecao.component';
import { DecksComponent } from './pages/decks/decks.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LoginComponent,
    HomeComponent,
    ColecaoComponent,
    DecksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
