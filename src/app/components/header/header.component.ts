import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title : string = 'Inicio';

  constructor(private router: Router) { }

  myBar(){
    this.router.navigate(['/mybar'])
    this.title = "Mi Barra"
  }
  audit(){
    this.router.navigate(['/audit'])
    this.title = "Auditoria"
  }
  reports(){
    this.router.navigate(['/reports'])
    this.title = "Reportes"
  }
  managers(){
    this.router.navigate(['/managers'])
    this.title = "Encargados"
  }
  configuration(){
    this.router.navigate(['/configuration'])
    this.title = "Configuracion"
  }
}


