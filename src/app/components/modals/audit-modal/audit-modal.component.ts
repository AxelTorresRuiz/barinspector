import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AuditscanModalComponent } from '../auditscan-modal/auditscan-modal.component';
import * as JsBarcode from 'jsbarcode';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { BarAudit, barAuditAuditingAdd, barAuditAuditingClean, barAuditAuditingMaxId } from 'src/app/services/api/BarAudit.model';
import { convertirAOz, convertirAOzString, sleep } from 'src/app/services/api/const.api';
import { getWeight } from 'src/app/services/bascula.service';
@Component({
  selector: 'app-audit-modal',
  templateUrl: './audit-modal.component.html',
  styleUrls: ['./audit-modal.component.css']
})
export class AuditModalComponent implements OnInit {
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<AuditscanModalComponent>) { }
  ngOnInit(): void {
    this.barBottle = this.barBottle as BarBottle;
    this.botella = this.botella as Bottle;
    var barCode = document.getElementById("barcodeBottleAudit");
    if (barCode)
      barCode.innerHTML = "";
    JsBarcode(barCode, this.botella.SKU)
    console.log(this.barBottle)
    this.obtenerPeso();
  }

  @Input() barBottle: any;
  @Input() botella: any
  openDialog() {
    this.saveAudit();
    this.pesando=false;
    this.dialog.open(AuditscanModalComponent, {
      width: '41.875', height: '27.25rem'
    })
    this.dialogRef.close();
  }

  closeModal() {
    this.pesando=false;
    this.dialogRef.close()
  }

  async saveAudit() {
    var lastId: number = -1;
    try {
      lastId = await barAuditAuditingMaxId();
    } catch (e) { }
    lastId++;
    const barAudit: BarAudit = { Id: lastId, LastWeight: this.barBottle.CurrentWeight, ActualWeight: this.pesoObtenido }
    console.log(barAudit)
  }

  cantidadOz="";
  pesando=true;
  pesoObtenido = 0;
  async obtenerPeso() {
    while (this.pesando) {
      try {
        var aux = await getWeight();
        this.pesoObtenido = Number.isNaN(aux) ? this.pesoObtenido : aux;
        console.info(this.pesoObtenido);
      } catch (error) { }
      this.cantidadOz=convertirAOzString((this.pesoObtenido-this.botella.EmptyBottleWeight)/this.botella.DensityInLiters);
      await sleep(0);
    }
  }
}
