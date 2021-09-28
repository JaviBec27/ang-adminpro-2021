import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  //Viewchild, esto es para tener el control del DOM 
  @ViewChild('txtProgress') txtProgress: ElementRef;

  //Entradas
  @Input() progreso: number = 40;
  @Input('nombre') leyenda: string = 'Leyenda';

  //Salidas
  @Output('updateValue') cambioValor:EventEmitter<number> = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit(){

  }

  cambiarValor(valor) {
    this.progreso = this.progreso + valor;
    if (this.progreso < 0 || this.progreso > 100)
      this.progreso = this.progreso - valor;

    this.cambioValor.emit(this.progreso)
  }

  onChanges(newValue:number){

    if(newValue>=100)
      this.progreso=100;
    else if(newValue<=0)
      this.progreso=0;
    else
      this.progreso=newValue;

    this.txtProgress.nativeElement.focus();
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

  }

}
