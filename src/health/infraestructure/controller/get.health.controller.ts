import { Controller, Get, HttpCode } from '@nestjs/common';
import { GetHealthService } from '../../application/get.health.service';
import { HealthDto } from '../../application/dto/health.dto';

@Controller('health')
export class GetHealthController {
  constructor(private readonly healthService: GetHealthService) {}

  @HttpCode(200)
  @Get()
  getHello(): HealthDto {
    return this.healthService.getHealth();
  }
}
