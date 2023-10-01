import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { bottlePost } from 'src/app/services/api/Bottle.service';
@Component({
  selector: 'app-addbottle',
  templateUrl: './addbottle.component.html',
  styleUrls: ['./addbottle.component.css']
})
export class AddbottleComponent implements OnInit {
  bottle:Bottle={
    name:'',
    liquor:'',
    sku:'',
    presentacion:0,
    fullBottleWeight:0,
    emptyBottleWeight:0,
    weightPerOunce:0
  }
  constructor(private pagetitleservice:PagetitleService){}
  
  ngOnInit(): void {
    this.pagetitleservice.setPageTitle('Añadir Botella')
  }
  
}
