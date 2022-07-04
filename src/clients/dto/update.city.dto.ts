import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClientDTO {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  lastname: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  countryId: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  email: string;
}
