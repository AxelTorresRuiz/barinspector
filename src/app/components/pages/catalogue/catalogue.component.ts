import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import {MatDialog} from '@angular/material/dialog'
import { CatalogueModalComponent } from '../../modals/catalogue-modal/catalogue-modal.component';
import { bottleGet } from 'src/app/services/api/Bottle.service';
import { barBottleGet } from 'src/app/services/api/BarBottle.service';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { Bottle } from 'src/app/services/api/Bottle.model';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  bottles:any[] = []

  constructor(private pageTitleService:PagetitleService, public dialog: MatDialog){}

  

  openModal(bottle: any){
    const dialogRef = this.dialog.open(CatalogueModalComponent,{
      width:'52.875rem', height:'42.75rem',
      disableClose:true,
      data:{botellaSeleccionada:bottle}
    });
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Catálogo')
    bottleGet().then((data:any)=>{
      this.bottles=data;
    });
  }

  filterByLiquor(liquorType: string) {
    if(liquorType === 'Todos'){
      bottleGet().then((data:any)=>{
        this.bottles=data;
      });
    } else{
      bottleGet().then((data:any)=>{
        this.bottles = data.filter((bottle:any) => bottle.Liquor && bottle.Liquor.trim() === liquorType);
      })
    }
  }

}
