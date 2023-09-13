import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { BottleserviceService } from 'src/app/services/api/bottleservice.service';
import { bottleGet, bottlePost, bottlePut } from 'src/app/services/api/Bottle.service'
import { Bottle } from 'src/app/services/api/Bottle.model';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
@Component({
  selector: 'app-mybar',
  templateUrl: './mybar.component.html',
  styleUrls: ['./mybar.component.css']
})
export class MybarComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService, private router:Router, private bottleService:BottleserviceService ){
  }

  agregar(){
    this.router.navigate(['/catalogue'])
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Mi barra');
  }


}
