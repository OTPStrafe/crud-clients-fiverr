import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCityDTO {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  city: string; // New York -- Texas
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  state: string; // New York -- Houston
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  countryId: string;
}
