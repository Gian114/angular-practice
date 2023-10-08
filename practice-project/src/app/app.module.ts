import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import from angular material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SliderComponent } from './slider/slider.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HighlightDirective } from './direttive/highlight.directive';
import { ProvaServizioService } from './prova-servizio.service';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component';

//In angular esistono diverse direttive da usare anche in html, cercale su Internet nel caso ti servano vedi ngIf, ngFor, ngSwitch, ngClass, ngStyle, ecc.


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardComponent,
    HighlightDirective,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [ProvaServizioService], //puoi metterli anche qui i services che vuoi disponibili in root
  bootstrap: [AppComponent]
})
export class AppModule { }
