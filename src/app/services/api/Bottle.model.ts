import { BarBottle } from "./BarBottle.model";

export interface Bottle {
    id?: number;
    name: string;
    liquor?: string;
    sku?: string;
    presentacion?: number;
    fullBottleWeight: number;
    emptyBottleWeight: number;
    weightPerOunce: number;
    slug?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleteAt?: Date;
    image?: string;
    BarBottle?: BarBottle[];
}