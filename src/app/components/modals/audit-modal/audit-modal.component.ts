import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AuditscanModalComponent } from '../auditscan-modal/auditscan-modal.component';
@Component({
  selector: 'app-audit-modal',
  templateUrl: './audit-modal.component.html',
  styleUrls: ['./audit-modal.component.css']
})
export class AuditModalComponent {
  constructor(private dialog:MatDialog, public dialogRef:MatDialogRef<AuditscanModalComponent>){}

  openDialog(){
    this.dialog.open(AuditscanModalComponent,{
      width:'41.875', height:'27.25rem'
    })
    this.dialogRef.close();
  }

  closeModal(){
    this.dialogRef.close()
  }

}
