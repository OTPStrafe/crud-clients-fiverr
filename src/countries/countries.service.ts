import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from 'src/common/models/city.model';
import { Country } from 'src/common/models/country.model';
import { CountryDTO } from './dto/country.dto';
import { UpdateCountryDTO } from './dto/update.country.dto';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country) private readonly countryModel: typeof Country,
  ) {}
  async createCountry(countryDto: CountryDTO): Promise<any> {
    return await this.countryModel.create({ ...countryDto });
  }

  async getCountryByName(countryName: string): Promise<Country> {
    return await this.countryModel.findOne({ where: { name: countryName } });
  }

  async getCountries(): Promise<Country[]> {
    return await this.countryModel.findAll();
  }

  async getCountryById(id: string): Promise<Country> {
    return await this.countryModel.findOne({
      where: { countryId: id },
      include: [City],
    });
  }

  async updateCountry(id: string, countryDto: UpdateCountryDTO): Promise<any> {
    return await this.countryModel.update(
      { ...countryDto },
      { where: { countryId: id } },
    );
  }

  async deleteCountry(id: string): Promise<any> {
    return await this.countryModel.destroy({ where: { countryId: id } });
  }
}
