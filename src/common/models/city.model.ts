import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Country } from './country.model';

@Table({ tableName: 'cities', timestamps: false })
export class City extends Model {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  cityId: number;
  @Column({ type: DataTypes.TEXT, allowNull: false }) // New York -- Texas
  city: string;
  @Column({ type: DataTypes.TEXT, allowNull: false }) // New York -- Houston
  state: string;
  @BelongsTo(() => Country, 'countryId')
  country: Country;
}
