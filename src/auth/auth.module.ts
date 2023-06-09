import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './schemas/auth.schema';

@Module({
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }])],
})
export class AuthModule {}
