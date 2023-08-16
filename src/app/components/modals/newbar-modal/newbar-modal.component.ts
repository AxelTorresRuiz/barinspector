import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-newbar-modal',
  templateUrl: './newbar-modal.component.html',
  styleUrls: ['./newbar-modal.component.css']
})
export class NewbarModalComponent {
  constructor(private dialogRef: MatDialogRef<NewbarModalComponent>){}

  closeModal(){
    this.dialogRef.close()
  }


}
