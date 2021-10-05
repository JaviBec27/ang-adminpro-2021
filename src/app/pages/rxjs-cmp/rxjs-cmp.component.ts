import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-cmp',
  templateUrl: './rxjs-cmp.component.html',
  styles: [],
})
export class RxjsCmpComponent implements OnInit, OnDestroy {
  constructor() {

    this.ObservableReturn()
      .pipe(
        retry()
      )
      .subscribe(
        result => {//evento notificado por el observer
          console.log('subs', result);
        }, error => { //evento de error
          console.log(error);
        }, () => {// evento de completado
          console.log('Obs ha terminado!');
        }
      );
  }

  ngOnDestroy(): void {
    this.intervaloSubs$.unsubscribe();
  }

  intervaloSubs$:Subscription;

  ngOnInit(): void {
    this.intervaloSubs$=  this.IntervaleReturn()
      .pipe(
        map(x => x + 1),
        take(50),
        filter((x: any) => this.validateOdd(x) ? true : false),
      )
      .subscribe(console.log);
  }

  validateOdd(value) {
    return value % 2 === 0;
  }

  IntervaleReturn(): Observable<any> {
    return interval(500);

  }

  ObservableReturn(): Observable<number> {
    let contador = 0;
    let obs$ = new Observable<number>((observer) => {
      let intervalo = setInterval(() => {
        do {
          contador += 1;
          observer.next(contador);

          if (contador === 3) {
            console.log('ERROR: pucha, llegamos a 3');
            observer.error('pucha, llegamos a 3')
          }

        } while (contador <= 5);

        clearInterval(intervalo);
        observer.complete();
      }, 1000);
    });

    return obs$;
  }
}
