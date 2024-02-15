import { Controller, Get } from '@nestjs/common';
import { GetHealthService } from '../../application/get.health.service';

@Controller('health')
export class GetHealthController {
  constructor(private readonly healthService: GetHealthService) {}

  @Get()
  getHello(): string {
    return this.healthService.getHealth();
  }
}
