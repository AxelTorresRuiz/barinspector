import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor(private pageTitleService:PagetitleService){}

  selectedLiquor: string = 'Elegir';
  date: Date | undefined

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Reportes')
  }

  liquors=[
    'Tequila',
    'Whisky',
    'Ron',
  ]
}
