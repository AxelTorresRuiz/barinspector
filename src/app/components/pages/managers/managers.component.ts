import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Encargados')
  }
}
