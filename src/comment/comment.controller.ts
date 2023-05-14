import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentModel } from './comment.model/comment.model';

@Controller('comment')
export class CommentController {
  @Post('create')
  async create(@Body() dto: Omit<CommentModel, '_id'>) {
    console.log('comment-create', dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log('category-delete', id);
  }

  @Get('byCategory/:categoryId')
  async getByCategory(@Param('productId') productId: string) {
    console.log('category-get', productId);
  }
}
