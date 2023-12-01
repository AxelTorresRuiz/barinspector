import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AuditscanModalComponent } from '../auditscan-modal/auditscan-modal.component';
import * as JsBarcode from 'jsbarcode';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { BarAudit, barAuditAuditingAdd, barAuditAuditingClean, barAuditAuditingGet, barAuditAuditingMaxId, barAuditExtractSubTalesArray } from 'src/app/services/api/BarAudit.model';
import { convertirAOz, convertirAOzString, sleep } from 'src/app/services/api/const.api';
import { getWeight } from 'src/app/services/bascula.service';
import { limpiraYGuardarBarraActiva, obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { sendPost } from 'src/app/services/api/Tools';
import { elements } from 'chart.js';
import { Bar } from 'src/app/services/api/Bar.model';
@Component({
  selector: 'app-audit-modal',
  templateUrl: './audit-modal.component.html',
  styleUrls: ['./audit-modal.component.css']
})
export class AuditModalComponent implements OnInit {
  barraActiva:Bar | undefined;
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<AuditscanModalComponent>) {
    obtenerBarraActiva().then(r=>{
      this.barraActiva=r;
    });
   }
  ngOnInit(): void {
    this.barBottle = this.barBottle as BarBottle;
    this.botella = this.botella as Bottle;
    var barCode = document.getElementById("barcodeBottleAudit");
    if (barCode)
      barCode.innerHTML = "";
    JsBarcode(barCode, this.botella.SKU)
    this.obtenerPeso();
  }

  @Input() barBottle: any;
  @Input() botella: any
  openDialog() {
    this.createAudit();
    this.pesando = false;
    this.dialog.open(AuditscanModalComponent, {
      width: '41.875', height: '27.25rem'
    })
    this.dialogRef.close();
  }

  async createAudit(){
    var lastId: number = -1;
    try {
      lastId = await barAuditAuditingMaxId();
    } catch (e) { }
    lastId++;
    var barAudit:BarAudit= {
      Id: lastId, LastWeight: this.barBottle.CurrentWeight, ActualWeight: this.pesoObtenido,
      MlConsumed: (this.barBottle.CurrentWeight - this.pesoObtenido) / this.botella.DensityInLiters,
      MlRemaining: (this.pesoObtenido - this.botella.EmptyBottleWeight) / this.botella.DensityInLiters,
      BarBottleId:this.barBottle.Id,
      BarBottle:this.barBottle,
      BarId:this.barraActiva?.Id,
      Bar:this.barraActiva
    }
    await barAuditAuditingAdd([barAudit]);
    
  }

  async closeModal() {
    this.pesando = false;
    await this.createAudit();
    const barAudit = barAuditExtractSubTalesArray(await barAuditAuditingGet());
    barAudit.forEach(element => {sendPost("/BarAudit", element)});
    
    this.dialogRef.close()
  }

  async onlyClose(){
    this.dialogRef.close();
  }

  async saveAudit() {
    
  }

  cantidadOz = "";
  pesando = true;
  pesoObtenido = 0;
  async obtenerPeso() {
    while (this.pesando) {
      try {
        var aux = await getWeight();
        this.pesoObtenido = Number.isNaN(aux) ? this.pesoObtenido : aux;
        console.info(this.pesoObtenido);
      } catch (error) { }
      this.cantidadOz = convertirAOzString((this.pesoObtenido - this.botella.EmptyBottleWeight) * this.botella.DensityInLiters);
      await sleep(0);
    }
  }
}
