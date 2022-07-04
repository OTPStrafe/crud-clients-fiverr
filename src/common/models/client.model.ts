import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Country } from './country.model';

@Table({ tableName: 'clients', timestamps: false })
export class Client extends Model {
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  clientId: number;
  @Column({ type: DataTypes.TEXT, allowNull: false })
  name: string;
  @Column({ type: DataTypes.TEXT, allowNull: false })
  lastname: string;
  @BelongsTo(() => Country, 'countryId')
  country: Country;
  @Column({ type: DataTypes.TEXT, allowNull: false })
  email: string;
}
