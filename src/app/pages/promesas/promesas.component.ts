import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.getUsuarios()
    .then(result=>{
      console.log('get uuser: ', result);
      
    })
    this.contador3Segundos()
      .then((mensaje) => console.log('Termino ', mensaje))
      .catch((error) => console.error('Error en la promesa', error));
  }

  ngOnInit(): void { }

  /**
   * Cuenta x tiempo y devuelve mediante una promesa la respuesta
   * @returns Retorna una promesa booleana
   */
  contador3Segundos(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          // reject('Bien!!!!, Terminó!')
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }



  getUsuarios(): Promise<any> {
    const promesa = new Promise<any>(
      resolve => {
        fetch('https://reqres.in/api/users?page=2')
          .then(result1 => result1.json())
          .then(result2 => resolve(result2.data)
          )
      })
    return promesa;
  }

}
