import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagetitleService } from 'src/app/services/pagetitle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private router: Router, private pageTitleService:PagetitleService) { }

  getPageTitle():string{
    return this,this.pageTitleService.getPageTitle();
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


