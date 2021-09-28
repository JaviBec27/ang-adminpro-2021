import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { from } from 'rxjs';
import { 
  SettingsService,
  SidebarService,
  SharedService
} from './settings.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SettingsService,
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }
