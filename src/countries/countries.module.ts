import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ContriesController } from './countries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from 'src/common/models/country.model';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  controllers: [ContriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
