import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from 'src/common/models/client.model';
import { Country } from 'src/common/models/country.model';
import { ClientDTO } from './dto/client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client) private readonly clientModel: typeof Client,
  ) {}

  async createClient(clientDto: ClientDTO): Promise<any> {
    const exists = await this.clientModel.findOne({
      where: { email: clientDto.email },
    });
    if (exists) {
      throw new Error('Client already exists');
    }
    return await this.clientModel.create({ ...clientDto });
  }

  async getClients(): Promise<Client[]> {
    return await this.clientModel.findAll();
  }

  async getClientById(id: string): Promise<Client> {
    return await this.clientModel.findOne({
      where: { clientId: id },
      include: [Country],
    });
  }

  async updateClient(id: string, clientDto: ClientDTO): Promise<any> {
    return await this.clientModel.update(
      { ...clientDto },
      { where: { clientId: id } },
    );
  }

  async deleteClient(id: string): Promise<any> {
    return await this.clientModel.destroy({ where: { clientId: id } });
  }
}
