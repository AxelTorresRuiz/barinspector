import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { MatDialog } from '@angular/material/dialog';
import { AudittypeModalComponent } from '../../modals/audittype-modal/audittype-modal.component';
import { AuditscanModalComponent } from '../../modals/auditscan-modal/auditscan-modal.component';
import { AuditModalComponent } from '../../modals/audit-modal/audit-modal.component';
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  constructor(private pageTitleService:PagetitleService, public dialog: MatDialog){}


  openDialog(): void{
    this.dialog.open(AudittypeModalComponent,{
      width:'41.875rem', height:'27.25rem'
    })
  }

  closeModal(){

  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Auditoría')
  }
}
