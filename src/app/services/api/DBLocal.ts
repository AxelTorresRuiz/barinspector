import Dexie from "dexie";
import { Bar } from "./Bar.model";
import { nombreDB, version } from "./const.api";

export var db: Dexie;
export async function crearDB() {
    db = new Dexie(nombreDB);
    db.version(version).stores({
        barActivo:"id++, Id, Name, Slug, CreatedAt, UpdatedAt, DeletedAt, barBottles",
        barAuditAuditing:"Id, LastWeight,ActualWeight,MlSold,MlConsumed,MlRemaining,Slug,CreatedAt,UpdatedAt,DeletedAt,BarId,UserId,Bar,User,BarBottle"
    });
    db.open();
    
}
export function useDB() {
    return db;
}

