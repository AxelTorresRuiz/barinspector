import { response, urlencoded } from "express";
import { BarBottle } from "src/app/services/api/BarBottle.model"
import { Url } from "./const.api";

var URLCompleta = Url + "/BarBottle";
export async function barBottleGet(parametros: string = "") {
    let barBottle = {};
    await fetch(URLCompleta + parametros)
        .then(response => response.json())
        .then(data => {
            // Aquí convertirás la respuesta a una instancia de la interfaz "BarBottle"
            barBottle = data["value"] as BarBottle[];
            console.info(barBottle);
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
        });
    return barBottle;
}

export async function barBottlePost(barBottle: BarBottle, params: string = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(barBottle)
    };

    console.info(JSON.stringify(barBottle))

    await fetch(URLCompleta + params, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.info(barBottle);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

export async function barBottlePut(barBottle: BarBottle, params: string = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(barBottle)
    };

    console.info(JSON.stringify(barBottle))

    await fetch(URLCompleta + params, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.info(barBottle);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}