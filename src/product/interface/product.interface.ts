import { Document } from 'mongoose';

export interface IProductCharacteristic {
  name: string;
  value: string;
}

export interface IProduct extends Document {
  image: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tags: string;
  characteristics: IProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
}
