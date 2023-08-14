import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SerialDataService } from 'src/app/services/serial-data.service';
@Component({
  selector: 'app-catalogue-modal',
  templateUrl: './catalogue-modal.component.html',
  styleUrls: ['./catalogue-modal.component.css']
})
export class CatalogueModalComponent {

  constructor(private dialogRef: MatDialogRef<CatalogueModalComponent>, private serialDataService:SerialDataService){}

  button1Active: boolean = false;
  button2Active: boolean = false;

  toggleButton(button: string): void {
    if (button === 'button1') {
      this.button1Active = !this.button1Active;
    } else if (button === 'button2') {
      this.button2Active = !this.button2Active;
    }
  }

  get datosSerial():string{
    return this.serialDataService.getDatosSerial();
  }

  closeModal(){
    this.dialogRef.close()
  }

}
