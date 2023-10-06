import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { Router } from '@angular/router';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { Bar } from 'src/app/services/api/Bar.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  barraActiva: Bar | undefined;
  constructor(private pagetitle: PagetitleService, private router:Router){}

  ngOnInit(): void {
    obtenerBarraActiva().then((r) => {
      this.barraActiva = r as Bar;
      // Verifica si pageTitle es "Mi barra" y actualiza pageTitle con barraActiva.Name si es así
      if (this.pagetitle.getPageTitle() === "Mi barra" && this.barraActiva) {
        this.pagetitle.setPageTitle(this.barraActiva.Name);
      }
    }).catch(() => {
      console.log("No hay ninguna barra activa");
    });
  }

  getPageTitle(): string {
    return this.pagetitle.getPageTitle();
  }
  myBar(){
    this.router.navigate(['/mybar'])
  }
  audit(){
    this.router.navigate(['/audit'])
  }
  reports(){
    this.router.navigate(['/reports'])
  }
  managers(){
    this.router.navigate(['/managers'])
  }
  configuration(){
    this.router.navigate(['/configuration'])
  }
}
