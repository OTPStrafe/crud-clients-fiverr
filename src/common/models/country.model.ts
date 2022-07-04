import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { City } from './city.model';

@Table({ tableName: 'countries', timestamps: false })
export class Country extends Model {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  countryId: number;
  @Column({ type: DataTypes.TEXT, allowNull: false }) // United States of America
  name: string;
  @Column({ type: DataTypes.TEXT, allowNull: false }) // U.S.A
  alias: string;
  @Column({ type: DataTypes.TEXT, allowNull: false }) // Washington, D.C
  capital: string;
  @HasMany(() => City, 'countryId')
  cities: City[];
}
