import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryModel } from './category.model/category.model';
import { FindProductDto } from './dto/find-category.dto';

@Controller('category')
export class CategoryController {
  @Post('create')
  async create(@Body() dto: Omit<CategoryModel, '_id'>) {
    console.log('category-create', dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    console.log('category-get', id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log('category-delete', id);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: CategoryModel,
  ): Promise<void> {
    console.log('category-patch', id);
    console.log('category-patch', dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    console.log('category-find', dto);
  }
}
