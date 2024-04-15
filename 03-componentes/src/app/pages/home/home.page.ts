import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirecTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
