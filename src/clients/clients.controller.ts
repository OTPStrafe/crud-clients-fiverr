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
import { ClientsService } from './clients.service';
import { ClientDTO } from './dto/client.dto';
import { UpdateClientDTO } from './dto/update.city.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  createClient(@Body() clientDto: ClientDTO): any {
    return this.clientsService.createClient(clientDto);
  }

  @Get()
  getClients() {
    return this.clientsService.getClients();
  }

  @Get(':id')
  getClientById(@Param('id') id: string) {
    return this.clientsService.getClientById(id);
  }

  @Put(':id')
  updateClient(@Param('id') id: string, @Body() clientDto: UpdateClientDTO) {
    return this.clientsService.updateClient(id, clientDto);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    return this.clientsService.deleteClient(id);
  }
}
