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
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {
    console.log('product-create', dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    console.log('product-get', id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log('product-delete', id);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: ProductModel,
  ): Promise<void> {
    console.log('product-patch', id);
    console.log('product-patch', dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    console.log('product-find', dto);
  }
}
