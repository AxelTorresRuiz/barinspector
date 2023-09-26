import { Bar } from "./Bar.model";
import { Url } from "./const.api";

var URLCompleta = Url + "/Bar";
export async function barGet(parametros: string="?$filter=DeletedAt eq null") {
    let bar={};
    await fetch(URLCompleta + parametros)
        .then(response => response.json())
        .then(data => {
            // Aquí convertirás la respuesta a una instancia de la interfaz "BarBottle"
            bar = data["value"] as Bar[];
            console.info(bar);
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
        });
    return bar;
}

export async function barPost(bar:Bar, params:string="") {
    console.log(bar)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(bar)
      };

    console.info(JSON.stringify(bar))

    await fetch(URLCompleta+params, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.info(bar);
    })
    .catch( error => {
        console.error("Error: ", error);
    });
}

export async function barPut(bar:Bar, params:string="") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(bar)
      };

    console.info(JSON.stringify(bar))

    await fetch(URLCompleta+params, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.info(bar);
    })
    .catch( error => {
        console.error("Error: ", error);
    });
}