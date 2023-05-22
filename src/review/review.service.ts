import { Injectable } from '@nestjs/common';
import { Review } from './schemas/review.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { IReview } from './interface/review.interface';

// This service is used to create, update, delete and find reviews
@Injectable()
export class ReviewService {
  // Inject the review model
  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<Review>,
  ) {}

  // Create a review
  async createReview(dto: CreateReviewDto): Promise<IReview> {
    // Create a new review with the given dto
    return this.reviewModel.create(dto);
  }

  // Delete a review
  async deleteReview(id: string): Promise<IReview | null> {
    // Find the review by its id and delete it
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  // Find reviews by product id
  async findReviewsByProductId(productId: string): Promise<IReview[]> {
    // Find all reviews for the given product id
    return this.reviewModel
      .find({ productId: new Types.ObjectId(productId) })
      .exec();
  }

  // Delete all reviews by product id
  async deleteManyReviewsByProductId(
    productId: string,
  ): Promise<{ deletedCount: number }> {
    // Delete all reviews for the given product id
    return await this.reviewModel
      .deleteMany({
        productId: new Types.ObjectId(productId),
      })
      .exec();
  }
}
