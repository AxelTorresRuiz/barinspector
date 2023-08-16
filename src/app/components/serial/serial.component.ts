import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SerialDataService } from 'src/app/services/serial-data.service';
@Component({
  selector: 'app-serial',
  template:''
})
export class SerialComponent implements OnInit {
  constructor(private http: HttpClient, private serialDataService: SerialDataService){}

  ngOnInit() {
      this.obtenerDatosSerial();
  }

  obtenerDatosSerial(){
    this.http.get<string>('http://localhost:5000/datos-serial').subscribe(data=>{
      this.serialDataService.setDatosSerial(data);
    });
  }
}
