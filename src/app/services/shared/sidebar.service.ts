import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgessBar', url: '/progress' },
        { titulo: 'Graficas1', url: '/graficas1' },
        // { titulo: 'Promesas', url: '/promesas' },
        // { titulo: 'RxJs', url: '/rxjs-component' },
      ],
    },
    
  ];

  constructor() {}
}
