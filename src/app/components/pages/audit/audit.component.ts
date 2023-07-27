import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  constructor(private pageTitleService:PagetitleService){}
  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Auditoría')
  }
}
