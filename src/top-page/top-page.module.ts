import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageSchema } from './schemas/top-page.schema';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([{ name: 'TopPage', schema: TopPageSchema }]),
  ],
})
export class TopPageModule {}
