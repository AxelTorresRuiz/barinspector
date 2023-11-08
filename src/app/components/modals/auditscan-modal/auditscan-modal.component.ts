import { Component, Input, OnInit } from '@angular/core';
import { AuditModalComponent } from '../audit-modal/audit-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Bar } from 'src/app/services/api/Bar.model';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { Bottle } from 'src/app/services/api/Bottle.model';
import * as JsBarcode from 'jsbarcode';
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
  onKeyPress(event: any) {
    this.barcodeElement.innerHTML = "";
    JsBarcode(this.barcodeElement, this.sku);
    if (this.barActual?.BarBottles != null) {
      this.barActual?.BarBottles.forEach(element => {
        var skuActual: string = element.Bottle?.SKU + "";
        if (skuActual === this.sku) {
          this.barBottle = element;
          this.openDialog();
        } else {
        }
      });
    }
    if (event.key === 'Enter') {
      this.openDialog();
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
    this.barActual = await obtenerBarraActiva() as Bar;
  }
}
