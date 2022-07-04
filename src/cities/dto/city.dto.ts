import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CityDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: string; // New York -- Texas
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  state: string; // New York -- Houston
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  countryId: string;
}
