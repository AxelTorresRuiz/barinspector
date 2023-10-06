import { Component, OnInit } from '@angular/core';
import { portsList, setWeight } from 'src/app/services/bascula.service';

@Component({
  selector: 'app-configure-scale',
  templateUrl: './configure-scale.component.html',
  styleUrls: ['./configure-scale.component.css']
})
export class ConfigureScaleComponent implements OnInit{
  velocidad:number = 9600;
  
  ngOnInit(): void {
    this.obtenerPuertos();
    this.enviar();
  }

  puertoSeleccionado:string="";
  puertosLista:string[]=[];
  async obtenerPuertos(){
    this.puertosLista=await portsList();
  }

  pesoObtenido = 0;
  async enviar(){
    console.log({puerto:this.puertoSeleccionado, velocidad:this.velocidad})
    try{
    this.pesoObtenido = await setWeight(this.puertoSeleccionado, this.velocidad+"");
    this.puertoSeleccionado=this.puertoSeleccionado;
    this.velocidad=this.velocidad;
    } catch (error) {}
    await this.sleep(1000);
    this.enviar();
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
