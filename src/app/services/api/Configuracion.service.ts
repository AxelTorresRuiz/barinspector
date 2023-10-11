import Dexie, { IndexableType } from "dexie";

export interface ConfiguracionBascula{
    id?:number;
    puerto:string;
    velocidad: number;
}

var version = 0.1;
export var ConfiguracionDB:Dexie;
export async function abrirConfiguracion() {
    ConfiguracionDB = new Dexie("Configuracion");
    ConfiguracionDB.version(version).stores({
        Bascula:"id++, puerto, velocidad"
    });
    ConfiguracionDB.open();
}

export async function configurarBascula(puerto:string, velocidad:number){
    var basculaConfiguracion = (await ConfiguracionDB.table("Bascula")) as Dexie.Table<any, IndexableType>;
    await basculaConfiguracion.clear();
    basculaConfiguracion?.add({ puerto: puerto, velocidad: velocidad })
}

export async function obtenerConfiguracionBascula():Promise<ConfiguracionBascula> {
    var basculaConfiguracion = (ConfiguracionDB.table("Bascula")) as Dexie.Table<any, IndexableType>;
    return (await basculaConfiguracion.toArray())[0] as ConfiguracionBascula;
}