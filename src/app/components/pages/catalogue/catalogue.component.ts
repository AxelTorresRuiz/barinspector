import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { CatalogueModalComponent } from '../../modals/catalogue-modal/catalogue-modal.component';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  constructor(private pageTitleService:PagetitleService, private cataloguemodal:CatalogueModalComponent){}




  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Catálogo')
  }


}
