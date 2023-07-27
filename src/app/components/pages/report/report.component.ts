import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor(private pageTitleService:PagetitleService){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Reportes')
  }
}
