import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService, private router:Router){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Encargados')
  }
  add(){
    this.router.navigate(['/addmanager'])
  }
}
