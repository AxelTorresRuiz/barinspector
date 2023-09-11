import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-newbar-modal',
  templateUrl: './newbar-modal.component.html',
  styleUrls: ['./newbar-modal.component.css']
})
export class NewbarModalComponent {
  constructor(private dialogRef: MatDialogRef<NewbarModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any ){}
  

  newBarName: string = ''; 
  newChecked: boolean = false;

  closeModal(){
    this.dialogRef.close()
  }

  onSubmit() {
    const newDiv = { barName: this.newBarName, checked: this.newChecked };
    this.data.divs.push(newDiv);
    this.dialogRef.close(this.data.divs);
  }


}
