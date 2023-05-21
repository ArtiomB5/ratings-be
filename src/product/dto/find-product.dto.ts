import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindProductDto {
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  limit: number;
}
