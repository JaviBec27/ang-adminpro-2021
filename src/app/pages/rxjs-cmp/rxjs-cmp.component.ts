import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-cmp',
  templateUrl: './rxjs-cmp.component.html',
  styles: [],
})
export class RxjsCmpComponent implements OnInit {
  constructor() {
    let obs = new Observable((observer) => {
      let contador = 1;

      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
      }, 1000);
    });


    obs.subscribe(result=>{
      console.log('subs', result);
    });
  }

  ngOnInit(): void {}
}
