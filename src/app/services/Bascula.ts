import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    private hubConnection: signalR.HubConnection;

    constructor() {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5256/weight') // Reemplaza con la URL de tu servidor de SignalR
            .build();

        this.hubConnection.on("Receive", function(weight){
            console.log(weight);
        });
    }

    // Implementa los métodos para conectar, desconectar y escuchar eventos en tu hub de SignalR
    // Ejemplo:
    startConnection(): void {
        this.hubConnection.start()
            .then(() => console.log('Conexión exitosa a SignalR'))
            .catch(err => console.error('Error al conectarse a SignalR', err));
    }
}