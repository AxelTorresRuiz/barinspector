import { Component } from '@angular/core';
import { AuditModalComponent } from '../audit-modal/audit-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-auditscan-modal',
  templateUrl: './auditscan-modal.component.html',
  styleUrls: ['./auditscan-modal.component.css']
})
export class AuditscanModalComponent {
  constructor(private dialogRef: MatDialogRef<AuditModalComponent>, public dialog: MatDialog){}

  onKeyPress(event:any){
    if(event.key === 'Enter'){
      this.openDialog();
    }
  }

  openDialog(){
    this.dialog.open(AuditModalComponent,{
      width:'52.875rem', height:'42.75rem'
    })
    this.dialogRef.close();
  }

  closeModal(){
    this.dialogRef.close()
  }

}
