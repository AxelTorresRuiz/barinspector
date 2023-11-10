import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router){}

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
