import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCountryDTO {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  alias: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  capital: string;
}
