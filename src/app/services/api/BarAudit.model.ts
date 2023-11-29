import { Bar } from "./Bar.model";
import { BarBottle } from "./BarBottle.model";
import { db } from "./DBLocal";
import { User } from "./User.model";

export interface BarAudit {
    Id: number,
    LastWeight?: number,
    ActualWeight?: number,
    MlSold?: number,
    MlConsumed?: number,
    MlRemaining?: number,
    Slug?: string,
    CreatedAt?: Date,
    UpdatedAt?: Date,
    DeletedAt?: Date,
    BarId?: number,
    UserId?: number,
    BarBottleId?: number,
    Bar?: Bar,
    User?: User,
    BarBottle?: BarBottle
}

export async function barAuditAuditingAdd(BarAudits: BarAudit[]) {
    await db.table("barAuditAuditing").bulkAdd(BarAudits);
}

export async function barAuditAuditingMaxId() {
    return (await db.table("barAuditAuditing").orderBy("Id").last()).Id
}

export async function barAuditAuditingClean() {
    await db.table("barAuditAuditing").clear();
}

export async function barAuditAuditingGet(): Promise<BarAudit[]> {
    return await db.table("barAuditAuditing").toArray();
}

export function barAuditExtractSubTales(barAudit: BarAudit): BarAudit {
    barAudit.BarBottle = undefined;
    barAudit.User = undefined;
    barAudit.Bar = undefined;
    return barAudit;
}

export function barAuditExtractSubTalesArray(barAudits: BarAudit[]): BarAudit[] {
    barAudits.forEach(element => {
        element = barAuditExtractSubTales(element);
    });
    return barAudits;
}