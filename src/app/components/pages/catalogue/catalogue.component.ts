import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import {MatDialog} from '@angular/material/dialog'
import { CatalogueModalComponent } from '../../modals/catalogue-modal/catalogue-modal.component';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  constructor(private pageTitleService:PagetitleService, public dialog: MatDialog){}


  openModal(){
    const dialogRef = this.dialog.open(CatalogueModalComponent,{
      width:'52.875rem', height:'42.75rem',
      disableClose:true,

    });

    dialogRef.afterClosed().subscribe(result=>{
      alert('Modal se cerro')
    })

  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Catálogo');
  }


}
