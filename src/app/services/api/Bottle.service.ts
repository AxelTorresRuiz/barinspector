import { response, urlencoded } from "express";
import { Bottle } from "src/app/services/api/Bottle.model"
import { Url } from "./const.api";
import { barBottleGet } from "./BarBottle.service";

var URLCompleta = Url + "/Bottle";
export async function bottleGet(parametros: string = "") {
    parametros = "?filter=DeleteAt eq null" + parametros;
    let bottle = {};
    await fetch(URLCompleta + parametros)
        .then(response => response.json())
        .then(data => {
            // Aquí convertirás la respuesta a una instancia de la interfaz "Bottle"
            bottle = data["value"] as Bottle[];
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
        });
    return bottle;
}

export async function bottlePost(bottle: Bottle, params: string = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(bottle)
    };

    console.info(JSON.stringify(bottle))

    await fetch(URLCompleta + params, requestOptions)
        .then(response => response.text())
        .then(data => {
            console.info(bottle);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

export async function bottlePut(bottle: Bottle, params: string = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(bottle)
    };

    console.info(JSON.stringify(bottle))

    await fetch(URLCompleta + params, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.info(bottle);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

export async function bottleImagePost(Id: number, file: File) {

    if (file != null) {
        const formData = new FormData();
        formData.append("image", file);

        // Realiza la solicitud fetch
        fetch(URLCompleta + "/" + Id + "/SaveImagen", {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                // Maneja la respuesta de la solicitud
            })
            .catch(error => {
                // Maneja cualquier error
                console.error(error);
            });
    }
}

export function obtenerOz(BarBottleYBotella: Bottle, peso: number): number {
    //console.info(BarBottleYBotella)
    return (peso - BarBottleYBotella.EmptyBottleWeight) * 1000 / BarBottleYBotella.WeightPerOunce;
}