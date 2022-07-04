import { Test, TestingModule } from '@nestjs/testing';
import { ContriesController } from './countries.controller';
import { CountriesService } from './countries.service';

describe('ContriesController', () => {
  let controller: ContriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContriesController],
      providers: [CountriesService],
    }).compile();

    controller = module.get<ContriesController>(ContriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
