import { Bar } from "./Bar.model";
import { Bottle } from "./Bottle.model";

export interface BarBottle {
    id: number;
    currentWeight: number;
    slug?: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt?: Date;
    bottleId: number;
    bottle?: Bottle;
    barId: number;
    bar?: Bar
  }