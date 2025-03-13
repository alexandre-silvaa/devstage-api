import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionRepositoryInterface } from './subscription-repository.interface';
import { SubscriptionEntity } from 'src/database/entities/subscription.entity';
import { CreateSubscriptionRequestDto } from 'src/modules/subscription/dto/request/create-subscription.request.dto';
import { CreateSubscriptionResponseDto } from 'src/modules/subscription/dto/response/create-subscription.response.dto.';

@Injectable()
export class SubscriptionRepositoryAdapter
  implements SubscriptionRepositoryInterface
{
  constructor(
    @InjectRepository(SubscriptionEntity)
    protected repository: Repository<SubscriptionEntity>,
  ) {}

  async create(
    createSubscriptionDto: CreateSubscriptionRequestDto,
  ): Promise<CreateSubscriptionResponseDto> {
    const userData = await this.repository.create(createSubscriptionDto);
    const savedUser = await this.repository.save(userData);

    return new CreateSubscriptionResponseDto(savedUser);
  }
}
