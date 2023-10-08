import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //disponibile in tutta l'applicazione
})
export class ProvaServizioService {

  //per creare servizio vedi comando terminale su doc 
  //anche i servizi li puoi mettere in una cartella apposita
  //servizi gestistocono la logica dell'applicazione esempio sono servizi che gestiscono login, logout ad esempio 

  ikea = [
  {nome: "tavolo", prezzo: 100, quantita: 1},
  {nome: "sedia", prezzo: 50, quantita: 2},
  {nome: "libreria", prezzo: 200, quantita: 1},
  {nome: "lampada", prezzo: 20, quantita: 3},
  ] 

  constructor() {

   }
}
