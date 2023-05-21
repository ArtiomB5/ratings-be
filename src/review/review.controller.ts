import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import * as CONSTANTS from './constants/index';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async createReview(
    @Res() response,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    try {
      const newReview = await this.reviewService.createReview(createReviewDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: 201,
        message: CONSTANTS.REVIEW_CREATE_CREATED,
        newReview,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: CONSTANTS.REVIEW_CREATE_BAD_REQUEST,
        error,
      });
    }
  }

  @Delete(':id')
  async deleteReview(@Res() response, @Param('id') reviewId: string) {
    try {
      const deletedReview = await this.reviewService.deleteReview(reviewId);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: CONSTANTS.REVIEW_DELETE_OK,
        deletedReview,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: CONSTANTS.REVIEW_COMMON_NOT_FOUND,
        error,
      });
    }
  }

  @Get('byProduct/:productId')
  async findReviewByProductId(
    @Res() response,
    @Param('productId') productId: string,
  ) {
    try {
      const existingReviews = await this.reviewService.findReviewsByProductId(
        productId,
      );
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: CONSTANTS.REVIEW_GET_OK,
        existingReviews,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: CONSTANTS.REVIEW_COMMON_NOT_FOUND,
        error,
      });
    }
  }

  @Delete('byProduct/:productId')
  async deleteManyReviewsByProductId(
    @Res() response,
    @Param('productId') productId: string,
  ) {
    try {
      const { deletedCount } =
        await this.reviewService.deleteManyReviewsByProductId(productId);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: CONSTANTS.REVIEWS_DELETE_OK,
        deletedCount,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: CONSTANTS.REVIEWS_NOT_FOUND,
        error,
      });
    }
  }
}
