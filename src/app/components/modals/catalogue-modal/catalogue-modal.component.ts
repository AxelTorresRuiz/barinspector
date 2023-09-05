import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BasculaService } from 'src/app/services/bascula.service';
@Component({
  selector: 'app-catalogue-modal',
  templateUrl: './catalogue-modal.component.html',
  styleUrls: ['./catalogue-modal.component.css']
})
export class CatalogueModalComponent implements OnInit {
   heightValue!: number;
  constructor(private bascula:BasculaService,private dialogRef: MatDialogRef<CatalogueModalComponent>){}

  button1Active: boolean = false;
  button2Active: boolean = false;

  toggleButton(button: string): void {
    if (button === 'button1') {
      this.button1Active = !this.button1Active;
    } else if (button === 'button2') {
      this.button2Active = !this.button2Active;
    }
  }

  ngOnInit(){
    this.bascula.startConnection();

    this.bascula.getWeightObservable().subscribe(weight=>{
      this.heightValue = weight;
    })
  }


  closeModal(){
    this.dialogRef.close()
  }

}
