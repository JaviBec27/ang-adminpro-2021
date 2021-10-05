import { AstVisitor } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public tituloSubs$: Subscription;
  titulo: string = "";
  constructor(private router: Router) { }



  ngOnInit(): void {
    this.tituloSubs$ =
      this.getArgumentoRuta()
        .subscribe(result => {
          this.titulo = result.titulo;
          document.title = `Adminpro - ${result.titulo}`;
        })
  }

  getArgumentoRuta(): Observable<any> {
    return this.router.events
      .pipe(
        filter(x => x instanceof ActivationEnd),
        filter((x: ActivationEnd) => x.snapshot.firstChild === null),
        map((x: ActivationEnd) => x.snapshot.data)
      )
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

}
