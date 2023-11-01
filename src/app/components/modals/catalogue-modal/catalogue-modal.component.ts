import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { barBottlePost } from 'src/app/services/api/BarBottle.service';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { bottleGet, obtenerOz } from 'src/app/services/api/Bottle.service';
import { configurarBascula, obtenerConfiguracionBascula } from 'src/app/services/api/Configuracion.service';
import { convertirAOzString, sleep } from 'src/app/services/api/const.api';
import { getWeight, setWeight } from 'src/app/services/bascula.service';
@Component({
  selector: 'app-catalogue-modal',
  templateUrl: './catalogue-modal.component.html',
  styleUrls: ['./catalogue-modal.component.css']
})
export class CatalogueModalComponent implements OnInit {
  heightValue!: number;
  constructor(private dialogRef: MatDialogRef<CatalogueModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { botellaSeleccionada: any }) { }

  button1Active: boolean = false;
  button2Active: boolean = false;
  btn1active: boolean = true;
  btn2active: boolean = false;

  toggleButton(button: string): void {
    if (button === 'button1') {
      this.button1Active = !this.button1Active;
    } else if (button === 'button2') {
      this.button2Active = !this.button2Active;
    }
  }

  tglButton(button: string): void {/*
    if (button === 'btn1') {
      this.btn1active = !this.btn1active;
    } else if (button === 'btn2') {
      this.btn2active = !this.btn2active;
    }*/
    
    if(this.btn1active){
      this.btn1active=false;
      this.btn2active=true;
    }else{
      this.btn2active=false;
      this.btn1active=true;
    }
  }
  ngOnInit() {
    this.obtenerPuertos();
  }

  ejectuandose:boolean = true;
  peso: number = 0;
  async obtenerPeso() {
    while (this.ejectuandose) {
      try {
        this.heightValue = await getWeight();
      } catch { }
      await sleep(0);//en caso de error o un uso excesivo de memoria poner a 1 segundo
    }
  }
  
  pesoAcumulado:number=0;
  botellas:number[]=[];
  addPesoBotella(){
    this.botellas.push(this.heightValue);
    this.pesoAcumulado=this.botellas.reduce((acumulador, valorActual) => acumulador + valorActual, 0) - (this.data.botellaSeleccionada.EmptyBottleWeight*this.botellas.length);
  }

  addBotella(){
    this.botellas.push(this.data.botellaSeleccionada.FullBottleWeight);
    this.pesoAcumulado=this.botellas.reduce((acumulador, valorActual) => acumulador + valorActual, 0) - (this.data.botellaSeleccionada.EmptyBottleWeight*this.botellas.length);
  }

  botella:Bottle | null=null;
  puertoSeleccionado: string | null = null;
  velocidad: string | null = null;
  async obtenerPuertos() {
    try {
      var config = await obtenerConfiguracionBascula();
      this.puertoSeleccionado = config['puerto'];
      this.velocidad = config['velocidad'] + "";
      await setWeight(this.puertoSeleccionado, this.velocidad);
    } catch (e) { }
    this.obtenerPeso()
  }

  
  closeModal() {
    this.dialogRef.close();
    this.ejectuandose=false;
  }

  async agregarConPesoDeBasucula() {
    var barra = await obtenerBarraActiva();
    delete barra.id;
    var ml:number = 29.573529;
    if(this.btn2active){
      ml = ml*1.5;
    }
    var bottle: BarBottle = { 
      Id: 0, CurrentWeight: this.heightValue + this.pesoAcumulado, CreatedAt: new Date(), UpdatedAt: new Date(), 
      BarId: barra.Id, BottleId: this.data.botellaSeleccionada.Id, CantidadDeServir:ml, NumeroDeBotellas: this.botellas.length + 1
    }
    if (bottle.CurrentWeight != null && bottle.CurrentWeight >= 0) {
      this.botellas.push(this.pesoAcumulado + this.heightValue);
      barBottlePost(bottle);
    }
    this.closeModal();
  }

  obtenerOz(bottle:Bottle, peso:number):string{
    return obtenerOz(bottle, peso).toFixed(2);
  }


}
