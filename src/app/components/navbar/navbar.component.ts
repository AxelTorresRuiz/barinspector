import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private pagetitle: PagetitleService, private router:Router){}


  getPageTitle():string{
    return this, this.pagetitle.getPageTitle();
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
