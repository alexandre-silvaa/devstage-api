import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionRepositoryInterface } from './subscription-repository.interface';
import { SubscriptionEntity } from 'src/database/entities/subscription.entity';
import { CreateSubscriptionDto } from 'src/modules/subscription/dto/request/create-subscription.dto';

@Injectable()
export class SubscriptionRepositoryAdapter
  implements SubscriptionRepositoryInterface
{
  constructor(
    @InjectRepository(SubscriptionEntity)
    protected repository: Repository<SubscriptionEntity>,
  ) {}

  async create(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<SubscriptionEntity> {
    console.log('createSubscriptionDto', createSubscriptionDto);
    throw new Error('Method not implemented.');
  }
}
