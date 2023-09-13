import { BarBottle } from "./BarBottle.model";

export interface Bar {
    id: number;
    name: string;
    slug?: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    barBottles: BarBottle[];
  }