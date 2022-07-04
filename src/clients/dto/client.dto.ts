import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class ClientDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastname: string;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  countryId: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;
}
