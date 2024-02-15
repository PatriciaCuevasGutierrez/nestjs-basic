import { Health } from '../../domain/entities/health';

export class HealthDto {
  status: string;

  public static entityToDto(entity: Health): HealthDto {
    return {
      status: entity.status,
    };
  }
}
