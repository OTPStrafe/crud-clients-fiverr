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
import { CitiesService } from './cities.service';
import { CityDTO } from './dto/city.dto';
import { UpdateCityDTO } from './dto/update.city.dto';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  createCity(@Body() cityDto: CityDTO): any {
    return this.citiesService.createCity(cityDto);
  }

  @Get()
  getCities(): any {
    return this.citiesService.getCities();
  }

  @Get(':id')
  getCityById(@Param('id') id: string): any {
    return this.citiesService.getCityById(id);
  }

  @Put(':id')
  updateCity(@Param('id') id: string, @Body() cityDto: UpdateCityDTO): any {
    return this.citiesService.updateCity(id, cityDto);
  }

  @Delete(':id')
  deleteCity(@Param('id') id: string): any {
    return this.citiesService.deleteCity(id);
  }
}
