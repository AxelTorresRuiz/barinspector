import { Component } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  constructor(private pageTitleService:PagetitleService){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Catálogo')
  }

}
