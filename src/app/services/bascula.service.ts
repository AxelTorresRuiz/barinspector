import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasculaService {
  private hubConnection: signalR.HubConnection;
  private weightSubject= new Subject<number>();
  constructor() { 
    
    this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5000/weight') // Reemplaza con la URL de tu servidor de SignalR
            .build();

        this.hubConnection.on("Receive",(weight)=>{
            console.log(weight);
            this.weightSubject.next(weight);
        });
  }
  startConnection(): void {
    this.hubConnection.start()
        .then(() => console.log('Conexión exitosa a SignalR'))
        .catch(err => console.error('Error al conectarse a SignalR', err));
  }

  getWeightObservable(): Observable<number> {
    return this.weightSubject.asObservable();
  }

}
