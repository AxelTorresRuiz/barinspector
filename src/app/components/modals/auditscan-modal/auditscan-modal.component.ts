import { Component, Input, OnInit } from '@angular/core';
import { AuditModalComponent } from '../audit-modal/audit-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Bar } from 'src/app/services/api/Bar.model';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { Bottle } from 'src/app/services/api/Bottle.model';
import * as JsBarcode from 'jsbarcode';
import { BarAudit, barAuditAuditingGet } from 'src/app/services/api/BarAudit.model';
@Component({
  selector: 'app-auditscan-modal',
  templateUrl: './auditscan-modal.component.html',
  styleUrls: ['./auditscan-modal.component.css']
})
export class AuditscanModalComponent implements OnInit {
  barActual: Bar | null = null;
  constructor(private dialogRef: MatDialogRef<AuditModalComponent>, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtainInfo();
    this.barcodeElement = document.getElementById("barcode");
  }

  barcodeElement: any;
  sku: string = "";
  barBottle: any = null;
  barAudits: BarAudit[] = [];


 // Esta función se activa cuando se presiona una tecla
async onKeyPress(event: any) {
  this.barAudits = await barAuditAuditingGet();
  // Vacía el contenido del elemento de código de barras
  this.barcodeElement.innerHTML = "";
  
  // Genera un código de barras en el elemento correspondiente utilizando el SKU actual
  JsBarcode(this.barcodeElement, this.sku);

  // Si el objeto barActual existe y tiene una propiedad BarBottles no nula
  if (this.barActual?.BarBottles != null) {
    // Itera sobre cada elemento en el arreglo BarBottles
    this.barActual?.BarBottles.forEach(element => {
      var mismoBarBottle=false;
      // Itera sobre cada auditoría en el arreglo de barAudits
      this.barAudits.forEach(barAudit => {
        // Si el ID del barAudit coincide con el del elemento actual, la función finaliza
        if (barAudit.BarBottleId == element.Id) {
          console.info("si son iguales mira "+barAudit.BarBottleId+" "+element.Id)
          mismoBarBottle=true;
        }
      });
      if(!mismoBarBottle){

      // Convierte el SKU del elemento actual en una cadena de texto
      var skuActual: string = element.Bottle?.SKU + "";

      // Si el SKU actual coincide con el SKU introducido por el usuario
      if (skuActual === this.sku) {
        // Establece el elemento actual como barBottle y abre un diálogo
        this.barBottle = element;
        this.openDialog();
      } else {
        // Si no coincide, no se realiza ninguna acción
      }
    }
    });
  }
}

  openDialog() {
    const modal = this.dialog.open(AuditModalComponent, {
      width: '52.875rem', height: '42.75rem'
    });
    modal.componentInstance.barBottle = this.barBottle;
    modal.componentInstance.botella = this.barBottle.Bottle;
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close()
  }

  async obtainInfo() {
    this.barAudits = await barAuditAuditingGet() as BarAudit[];
    console.info(this.barAudits)
    this.barActual = await obtenerBarraActiva() as Bar;
  }
}
