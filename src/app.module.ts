import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://dbUser:q86O6vTaVDcVL19v@cluster0.44kqpmj.mongodb.net/?retryWrites=true&w=majority',
    // ),
    ConfigModule.forRoot(),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
