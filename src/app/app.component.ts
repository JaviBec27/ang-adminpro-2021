import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.index';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Adminpro';
constructor(public _ajustes:SettingsService){}
  ngOnInit(): void {

  }

}
