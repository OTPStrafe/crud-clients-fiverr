import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from 'src/common/models/city.model';
import { Country } from 'src/common/models/country.model';
import { CityDTO } from './dto/city.dto';
import { UpdateCityDTO } from './dto/update.city.dto';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City) private readonly cityModel: typeof City) {}

  async createCity(cityDto: CityDTO): Promise<any> {
    const exists = await this.getCityByName(cityDto.city);
    if (exists) {
      throw new Error('City already exists');
    }
    return await this.cityModel.create({ ...cityDto });
  }

  async getCityByName(cityName: string): Promise<City> {
    return await this.cityModel.findOne({ where: { city: cityName } });
  }

  async getCities(): Promise<City[]> {
    return await this.cityModel.findAll();
  }

  async getCityById(id: string): Promise<City> {
    return await this.cityModel.findOne({
      where: { cityId: id },
      include: [Country],
    });
  }

  async updateCity(id: string, updateCityDto: UpdateCityDTO): Promise<any> {
    const updateCount = await this.cityModel
      .update({ ...updateCityDto }, { where: { cityId: id } })
      .catch((err) => {
        throw new Error(err.message);
      });
    return { message: 'City updated', updateCount };
  }

  async deleteCity(id: string): Promise<any> {
    await this.cityModel.destroy({ where: { cityId: id } }).catch((err) => {
      throw new Error(err.mesage);
    });
    return { message: 'City deleted', id };
  }
}
