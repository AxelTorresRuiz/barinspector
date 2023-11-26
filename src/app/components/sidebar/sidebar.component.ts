import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { barName, setBarName } from 'src/app/services/api/const.api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    this.getInfo();
    this.titleName =  barName;
  }
  titleName="";
  async getInfo(){
    var bar = await obtenerBarraActiva();
    setBarName(bar.Name);
    this.titleName =  barName;
  }

  constructor(private router:Router){
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
