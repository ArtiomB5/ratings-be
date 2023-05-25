import { Injectable } from '@nestjs/common';
import { Review } from './schemas/review.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { IReview } from './interface/review.interface';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<Review>,
  ) {}

  async createReview(dto: CreateReviewDto): Promise<IReview> {
    return this.reviewModel.create(dto);
  }

  async deleteReview(id: string): Promise<IReview | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findReviewsByProductId(productId: string): Promise<IReview[]> {
    return this.reviewModel.find({ productId: productId }).exec();
  }

  async deleteManyReviewsByProductId(
    productId: string,
  ): Promise<{ deletedCount: number }> {
    return await this.reviewModel
      .deleteMany({
        productId: new Types.ObjectId(productId),
      })
      .exec();
  }
}
