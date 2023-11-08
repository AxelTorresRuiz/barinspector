import { Bar } from "./Bar.model";
import { BarBottle } from "./BarBottle.model";
import { db } from "./DBLocal";
import { User } from "./User.model";

export interface BarAudit{
    Id:number,
    LastWeight?:number,
    ActualWeight?:number,
    MlSold?:number,
    MlConsumed?:number,
    MlRemaining?:number,
    Slug?:string,
    CreatedAt?:Date,
    UpdatedAt?:Date,
    DeletedAt?:Date,
    BarId?:number,
    UserId?:number,
    Bar?:Bar,
    User?:User,
    BarBottle?:BarBottle
}

export async function barAuditAuditingAdd(BarAudits:BarAudit[]) {
        await db.table("barAuditAuditing").bulkAdd(BarAudits);
}

export async function barAuditAuditingMaxId() {
    return (await db.table("barAuditAuditing").orderBy("Id").last()).Id
}

export async function barAuditAuditingClean() {
    await db.table("barAuditAuditing").clear();
}