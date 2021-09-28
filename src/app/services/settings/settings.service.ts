import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private KEY_AJUSTES:string = "#AJUSTES";

  ajustes:Ajustes = {
    temaUrl:'assets/css/colors/default.css',
    tema:'default.css'
  };
  constructor() { 
    this.cargarAjustes();
  }

guardarAjustes(){
  // console.log('Guardado en el local storage')
  localStorage.setItem(this.KEY_AJUSTES, JSON.stringify( this.ajustes));
}

cargarAjustes(){
  if (localStorage.getItem(this.KEY_AJUSTES)){
    this.ajustes = JSON.parse(localStorage.getItem(this.KEY_AJUSTES));
    // console.log('Cargando desde local storage');
    this.aplicarTema(this.ajustes.tema);
  }
  else  {
    // console.log('Usando Valores Default');
  }
    
}

aplicarTema(tema:string){
  let url = `assets/css/colors/${tema}.css`
  document.getElementById('theme').setAttribute('href', url );

  this.ajustes.tema = tema;
  this.ajustes.temaUrl = url;
  this.guardarAjustes();
}

}

interface Ajustes{
  temaUrl: string,
  tema:string
}