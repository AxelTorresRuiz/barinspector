import { BarBottle } from "./BarBottle.model";

export interface Bar {
    Id: number;
    Name: string;
    Slug?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    DeletedAt?: string;
    BarBottles?: BarBottle[];
  }

