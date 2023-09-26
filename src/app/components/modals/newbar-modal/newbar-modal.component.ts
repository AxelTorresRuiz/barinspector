import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Bar } from 'src/app/services/api/Bar.model';
import { barPost } from 'src/app/services/api/Bar.service';
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
    const bar:Bar={Id:0, Name:this.newBarName}
    barPost(bar)
    this.data.divs.push(newDiv);
    this.dialogRef.close(this.data.divs);
  }


}
