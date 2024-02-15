import { Injectable } from '@nestjs/common';
import { HealthDto } from './dto/health.dto';

@Injectable()
export class GetHealthService {
  getHealth(): HealthDto {
    return HealthDto.entityToDto({ status: 'ok' });
  }
}
