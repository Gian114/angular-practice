import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //String interpolation = {{}} --- se html 
  // you can put inside the {{}} any ts code
  subtitle = 'This is a card component';
  title = 'Card Component';
  isVisibe = true;

  fruits = [
    { name: 'Apple', color: 'red' },
    { name: 'Banana', color: 'yellow' },
    { name: 'Orange', color: 'orange' },
    { name: 'Kiwi', color: 'green' },
    { name: 'Strawberry', color: 'red' },
    { name: 'Blueberry', color: 'blue' }
  ]

  //Property binding = [] --- conidzioni su true o false. si usano parentesi quadre
  //con property binding puoi fare if, else e cambiare propietà che è collegata a html.
  isDisabled = false;

  //con this in html puoi passare il componente
  //$event permette di prendere evento generato
  //event binding = () --- con parentesi tonde in html
  onClick() {
    console.log('Button was clicked');
  }

  //Two way binding = con ngModel --- con parentesi quadre e tonde in html [()]
  //si collega direttamente alla variabile, in questo caso title

}
