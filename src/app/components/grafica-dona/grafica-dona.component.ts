import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
// import { ChartType } from 'chart.js';
// import { MultiDataSet, Label } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {

  // Doughnut 
  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet;
  @Input()  doughnutChartType: ChartType = 'doughnut';
  @Input('doughnutTittle') leyenda: string;

  constructor() {
   }

  ngOnInit(): void {
  }

}
