import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://dbUser:q86O6vTaVDcVL19v@cluster0.44kqpmj.mongodb.net/?retryWrites=true&w=majority"), UsersModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
