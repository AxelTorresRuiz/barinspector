import { Bar } from "./Bar.model";
import { Bottle } from "./Bottle.model";

export interface BarBottle {
    Id: number;
    CurrentWeight: number;
    Slug?: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeleteAt?: Date;
    BottleId: number;
    Bottle?: Bottle;
    BarId: number;
    Bar?: Bar;
    CantidadDeServir?: number;
    NumOfBottles: number;
  }