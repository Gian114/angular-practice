import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  //prova passaggio dati da father a child
  @Input() data: string[] = []; //con input si specifica che il dato arriverà da fuori

  //passaggio da child a father
  @Output() sendData = new EventEmitter<string>(); //con output si specifica che il dato uscirà da questo componente
  figlio = 'ciao';

  sendDataFunction() {
    this.sendData.emit(this.figlio); 
  }

  //dai un'occhiata alle interfacce onInit, onChanges, ecc. per capire come funzionano

}
