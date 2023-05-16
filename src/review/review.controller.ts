import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    console.log('review-create', dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log('category-delete', id);
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    console.log('category-get', productId);
  }
}
