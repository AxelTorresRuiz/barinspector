import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { BarBottle } from 'src/app/services/api/BarBottle.model';
import { barBottlePost } from 'src/app/services/api/BarBottle.service';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { BasculaService, getWeight, setWeight } from 'src/app/services/bascula.service';
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
    setInterval(this.obtenerPeso,100)
  }

  peso:number=0;
  async obtenerPeso(){
    this.peso = await getWeight();
  }


  closeModal(){
    this.dialogRef.close()
  }

  async agregarConPesoDeBasucula(){
    var barra = await obtenerBarraActiva();
    delete barra.id;
    var bottle:BarBottle={Id:0, CurrentWeight:this.heightValue, CreatedAt:new Date(), UpdatedAt:new Date(), BarId:barra.Id, BottleId:this.data.botellaSeleccionada.Id}
    if(bottle.CurrentWeight!=null && bottle.CurrentWeight>=0){
      barBottlePost(bottle);
    }
    this.closeModal();
  }

}
