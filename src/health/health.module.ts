import { Module } from '@nestjs/common';
import { GetHealthController } from './infraestructure/controller/get.health.controller';
import { GetHealthService } from './application/get.health.service';

@Module({
  imports: [],
  controllers: [GetHealthController],
  providers: [GetHealthService],
})
export class HealthModule {}
