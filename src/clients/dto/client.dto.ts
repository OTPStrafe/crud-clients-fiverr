import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
  @IsString()
  @IsNotEmpty()
  countryId: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;
}
