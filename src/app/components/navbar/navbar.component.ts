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
  activeButton:string | null = null;
  barraActiva: Bar | undefined;

  constructor(private pagetitle: PagetitleService, private router:Router){}
  buttonBar: boolean = false;
  buttonAudit: boolean = false;
  buttonReport: boolean = false;
  buttonManager: boolean = false;
  buttonConfiguration: boolean = false;

  toggleButton(button: string){
    if(button === 'button1'){
      this.buttonBar = !this.buttonBar;
      this.buttonAudit = false;
      this.buttonReport = false;
      this.buttonManager = false;
      this.buttonConfiguration = false;
      this.router.navigate(['/mybar'])
    }
    else if(button === 'button2'){
      this.buttonAudit = !this.buttonAudit;
      this.router.navigate(['/audit'])
      this.buttonBar = false;
      this.buttonReport = false;
      this.buttonManager = false;
      this.buttonConfiguration = false;
    }
    else if(button === 'button3'){
      this.buttonReport = !this.buttonReport;
      this.router.navigate(['/reports'])
      this.buttonBar = false;
      this.buttonAudit = false;
      this.buttonManager = false;
      this.buttonConfiguration = false;
    }
    else if(button ==='button4'){
      this.buttonManager = !this.buttonManager;
      this.router.navigate(['/managers'])
      this.buttonBar = false;
      this.buttonAudit = false;
      this.buttonReport = false;
      this.buttonConfiguration = false;
    }
    else if(button ==='button5'){
      this.buttonConfiguration = !this.buttonConfiguration;
      this.router.navigate(['/configuration'])
      this.buttonBar = false;
      this.buttonAudit = false;
      this.buttonReport = false;
      this.buttonManager = false;
    }
  }


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

  myBar() {
    this.router.navigate(['/mybar']);

  }

  audit() {
    this.router.navigate(['/audit']);
    this.activeButton = 'Audit';
  }

  reports() {
    this.router.navigate(['/reports']);
    this.activeButton = 'Reportes';
  }

  managers() {
    this.router.navigate(['/managers']);
    this.activeButton = 'Encargados';
  }

  configuration() {
    this.router.navigate(['/configuration']);
    this.activeButton = 'Configuracion';
  }


}
