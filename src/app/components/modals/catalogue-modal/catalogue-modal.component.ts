import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasculaService } from 'src/app/services/bascula.service';
@Component({
  selector: 'app-catalogue-modal',
  templateUrl: './catalogue-modal.component.html',
  styleUrls: ['./catalogue-modal.component.css']
})
export class CatalogueModalComponent implements OnInit {
   heightValue!: number;
  constructor(private bascula:BasculaService,private dialogRef: MatDialogRef<CatalogueModalComponent>, @Inject(MAT_DIALOG_DATA) public data:{botellaSeleccionada: any}){}

  button1Active: boolean = false;
  button2Active: boolean = false;
  btn1active: boolean=false;
  btn2active: boolean=false;

  toggleButton(button: string): void {
    if (button === 'button1') {
      this.button1Active = !this.button1Active;
    } else if (button === 'button2') {
      this.button2Active = !this.button2Active;
    }
  }

  tglButton(button: string): void {
    if (button === 'btn1') {
      this.btn1active = !this.btn1active;
    } else if (button === 'btn2') {
      this.btn2active = !this.btn2active;
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
