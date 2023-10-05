import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//per creare direttive puoi vedere comando su terminale su documentazione online di angular
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() defaultColor: string = ""; //per passare colore da fuori
  @Input() appHighlight: string = ""; //per passare colore da fuori

  //nel costruttore passiamo l'elemento di riferimento
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = "red";
    
   }

   //per gestire quando mouse va sopra e quando esce da elemento
   @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.appHighlight; //arriva da component il colore 

   }

   @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = "red";
   }


}
