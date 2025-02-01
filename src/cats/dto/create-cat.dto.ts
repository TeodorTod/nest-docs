import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCatDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsNotEmpty()
  breed: string;
}
