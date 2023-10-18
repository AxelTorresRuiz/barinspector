/*
@Injectable({
  providedIn: 'root'
})
export class BasculaService {
  private hubConnection: signalR.HubConnection;
  private weightSubject = new Subject<number>();
  
  
  constructor() {

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/weight') // Reemplaza con la URL de tu servidor de SignalR
      .build();

    this.hubConnection.on("Receive", (weight) => {
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

}*/
  export async function getWeight() {
    var respuesta = await fetch('http://127.0.0.1:5000/com_value').then(r=>r.json());
    return convertWeight(respuesta.value);
  }

  export async function portsList() {
    return (await fetch('http://127.0.0.1:5000/com_ports').then(r=>r.json())).ports;
  }

  export async function setWeight(puerto:string, baudio:string){
    let formData = new FormData();
    formData.append("port_name", puerto);
    formData.append("baud_rate", baudio);

    var respuesta = await fetch('http://127.0.0.1:5000/com_value', {
      method: 'POST',
      body: formData
    }).then(r=>r.json());
    return convertWeight(respuesta.value);
  }

  function convertWeight(weight: string): number {
    // Quita el "kg" o "lb" del final del string
    const value = weight.replace(/kg$|lb$/, '');
  
    // Extrae el número y el signo utilizando una expresión regular
    const regex = /^([-+])?([0-9]+(\.[0-9]+)?)$/;
    const matches = value.match(regex);
  
    if (matches) {
      const sign = matches[1] === '-' ? -1 : 1;
      const number = parseFloat(matches[2]);
  
      // Convierte a kilogramos si el string original era en libras
      const converted = weight.endsWith('lb') ? number / 2.2046 : number;
  
      // Multiplica por el signo para mantener el número negativo si es necesario
      return converted * sign;
    }
  
    return NaN; // Si el string no tiene un formato válido, devuelve NaN
  }
  