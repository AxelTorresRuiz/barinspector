import Dexie from "dexie";
import { Bar } from "./Bar.model";
import { nombreDB, version } from "./const.api";

export var db: Dexie;
export async function crearDB() {
    db = new Dexie(nombreDB);
    db.version(version).stores({
        barActivo:"id++, Id, Name, Slug, CreatedAt, UpdatedAt, DeletedAt, barBottles"
    });
    db.open();
    
}
export function useDB() {
    return db;
}

