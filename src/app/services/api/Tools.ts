import { Bar } from "./Bar.model";
import { barGet, limpiraYGuardarBarraActiva, obtenerBarraActiva } from "./Bar.service";

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