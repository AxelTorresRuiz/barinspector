import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerialDataService {
  private datosSerial:string ='';

  setDatosSerial(datos:string){
    this.datosSerial=datos;
  }

  getDatosSerial(){
    return this.datosSerial;
  }


  constructor() { }
}
