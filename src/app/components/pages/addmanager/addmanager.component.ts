import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  constructor(private pagetitle:PagetitleService){}

  ngOnInit(): void {
      this.pagetitle.setPageTitle('Añadir Encargado')
  }
}
