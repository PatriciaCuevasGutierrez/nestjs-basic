import { Injectable } from '@nestjs/common';

@Injectable()
export class GetHealthService {
  getHealth(): string {
    return 'status: ok';
  }
}
