import { BarBottle } from "./BarBottle.model";

export interface Bottle {
    Id?: number;
    Name: string;
    Liquor?: string;
    SKU?: string;
    Presentacion?: number;
    FullBottleWeight: number;
    EmptyBottleWeight: number;
    WeightPerOunce: number;
    Slug?: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    DeleteAt?: Date;
    Image?: string;
    BarBottle?: BarBottle[];
}