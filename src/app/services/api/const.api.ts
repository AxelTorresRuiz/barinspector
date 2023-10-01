export let Url:string;
Url="https://barinspector.com/api"
//Url="http://localhost:5126"

export let version:number;
version = 1;

export let nombreDB:string;
nombreDB="BarInspector";

export function convertirAOz(litros:number):number{
    return litros*33.8140227018;
}

export function convertirAOzString(litros:number, decimales:number=2):string{
    return convertirAOz(litros).toFixed(decimales)+" oz";
}