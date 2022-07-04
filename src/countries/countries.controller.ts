import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CountryDTO } from './dto/country.dto';
import { UpdateCountryDTO } from './dto/update.country.dto';

@ApiTags('Countries')
@Controller('contries')
export class ContriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @Post()
  createCountry(@Body() countryDto: CountryDTO): any {
    return this.countriesService.createCountry(countryDto);
  }

  @Get()
  getCountries(): any {
    return this.countriesService.getCountries();
  }

  @Get(':id')
  getCountryById(@Param('id') id: string): any {
    return this.countriesService.getCountryById(id);
  }

  @Put(':id')
  updateCountry(
    @Param('id') id: string,
    @Body() countryDto: UpdateCountryDTO,
  ): any {
    return this.countriesService.updateCountry(id, countryDto);
  }

  @Delete(':id')
  deleteCountry(@Param('id') id: string): any {
    return this.countriesService.deleteCountry(id);
  }
}
