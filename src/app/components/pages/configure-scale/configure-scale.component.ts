import { Component, OnInit } from '@angular/core';
import { getWeight, portsList, setWeight } from 'src/app/services/bascula.service';
import { ConfiguracionBascula, ConfiguracionDB, configurarBascula, obtenerConfiguracionBascula } from 'src/app/services/api/Configuracion.service';
import Dexie, { IndexableType } from 'dexie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure-scale',
  templateUrl: './configure-scale.component.html',
  styleUrls: ['./configure-scale.component.css']
})
export class ConfigureScaleComponent implements OnInit {
  velocidad: number = 9600;

  constructor(private router: Router) { }

  rute = ""
  ngOnInit(): void {
    this.obtenerPuertos();
    this.obtenerTabla();
    this.obtenerPeso();
    this.rute = this.router.url;
  }

  puertoSeleccionado: string = "";
  puertosLista: string[] = [];
  async obtenerPuertos() {
    this.puertosLista = await portsList();
    try {
      var config = await obtenerConfiguracionBascula();
      this.puertoSeleccionado = config['puerto'];
      this.velocidad = config['velocidad'];
    } catch (e) { }
    this.obtenerPeso()
  }

  pesoObtenido = 0;
  async enviar() {
    await this.sleep(100);
    console.log({ puerto: this.puertoSeleccionado, velocidad: this.velocidad })
    try {
      this.pesoObtenido = await setWeight(this.puertoSeleccionado, this.velocidad + "");
      this.puertoSeleccionado = this.puertoSeleccionado;
      this.velocidad = this.velocidad;
      configurarBascula(this.puertoSeleccionado, this.velocidad);
    } catch (error) { }
  }

  async obtenerPeso() {
    this.enviar()
    while (true) {
    if(!this.router.url.includes("configureScale"))
        return
      try {
        this.pesoObtenido = await getWeight();
        console.info(this.velocidad);
      } catch (error) { }
      
      await this.sleep(1000);
    }
  }

  basculaConfiguracion: Dexie.Table<any, IndexableType> | null = null;
  async obtenerTabla() {
    this.basculaConfiguracion = (await ConfiguracionDB.table("Bascula")) as Dexie.Table<any, IndexableType>;
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
