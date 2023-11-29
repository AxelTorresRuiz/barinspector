import { Bar } from "./Bar.model";
import { barGet, limpiraYGuardarBarraActiva, obtenerBarraActiva } from "./Bar.service";
import { Url } from "./const.api";

export async function necesariInformationSave() {

    var barraActual: Bar = await obtenerBarraActiva();
    try {
        barraActual = (await barGet("?filter=Id eq " + barraActual.Id + "&$expand=BarBottles($expand=Bottle)") as Bar[])[0];
        await limpiraYGuardarBarraActiva(barraActual);
        barraActual = await obtenerBarraActiva();
    } catch (e) {
        console.warn("No se pudo consultar la informacion de barra");
    }
}



export function getDifferenceInDays(date1: Date, date2: Date) {
}

export async function sendPost(endpoint: string, datos: any): Promise<Response> {
    const url = Url + endpoint
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };

    try {
        const respuesta = (await fetch(url, opciones)).json();
        return respuesta;
    } catch (error) {
        throw new Error('Oh, calamidad! Ha ocurrido un error al realizar el post.');
    }
}

export async function realizarSolicitudGet(endpoint:string, params:string="", url: string=Url): Promise<any> {
    try {
        const respuesta = await fetch(url + endpoint + params, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // Aquí puedes agregar más cabeceras si es necesario
            }
        });

        if (!respuesta.ok) {
            throw new Error(`Error al realizar la solicitud GET: ${respuesta.status} ${respuesta.statusText}`);
        }

        return await respuesta.json();
    } catch (error) {
        throw new Error(`Error al realizar la solicitud GET: `);
    }
}