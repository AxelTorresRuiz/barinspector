import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import {MatDialog} from '@angular/material/dialog'
import { CatalogueModalComponent } from '../../modals/catalogue-modal/catalogue-modal.component';
import { CatalogueService } from 'src/app/services/api/catalogue.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  bottles:any[] = []

  constructor(private pageTitleService:PagetitleService, public dialog: MatDialog, private catalogueService:CatalogueService){}


  openModal(){
    const dialogRef = this.dialog.open(CatalogueModalComponent,{
      width:'52.875rem', height:'42.75rem',
      disableClose:true,
    });

  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Catálogo')

    this.bottles = this.catalogueService.getBottle();
    console.log(this.bottles);
    

  }


}
