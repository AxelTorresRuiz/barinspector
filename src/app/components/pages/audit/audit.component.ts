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
    const dialogRef = this.dialog.open(AudittypeModalComponent,{
      width:'41.875rem', height:'27.25rem'
    })

    dialogRef.afterClosed().subscribe(result=>{
      if(result === 'openNewModal'){
        this.dialog.open(AuditscanModalComponent,{
          height:'27.25rem', width:'41.875rem'
        })
      }
    })
  }


  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Auditoría')
  }
}
