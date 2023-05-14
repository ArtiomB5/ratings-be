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
import { TopPageModel } from './top-page.model/top-page.model';
import { TopPageDto } from './dto/find-top-page.dto';

@Controller('category')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
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
    @Body() dto: TopPageModel,
  ): Promise<void> {
    console.log('category-patch', id);
    console.log('category-patch', dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: TopPageDto) {
    console.log('category-find', dto);
  }
}
