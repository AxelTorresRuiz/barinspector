import { Component } from '@angular/core';
import { AuditscanModalComponent } from '../auditscan-modal/auditscan-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-audittype-modal',
  templateUrl: './audittype-modal.component.html',
  styleUrls: ['./audittype-modal.component.css']
})
export class AudittypeModalComponent {
  constructor(private dialogRef: MatDialogRef<AudittypeModalComponent>, public dialog: MatDialog ){}


  openDialog(){
    this.dialog.open(AuditscanModalComponent,{
      width:'41.875rem', height:'27.25rem'
    });
    this.dialogRef.close();
  }

  closeModal(){
    this.dialogRef.close()
  }

}
