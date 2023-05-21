import { Document } from 'mongoose';

export interface IReview extends Document {
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
