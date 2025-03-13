import { Inject, Injectable } from '@nestjs/common';
import { SubscriptionRepositoryInterface } from 'src/adapters/repositories/subscription/subscription-repository.interface';
import { CreateSubscriptionDto } from '../dto/request/create-subscription.dto';

@Injectable()
export class CreateSubscriptionUseCase {
  constructor(
    @Inject('SubscriptionRepositoryInterface')
    private readonly subscriptionRepositoryInterface: SubscriptionRepositoryInterface,
  ) {}

  async execute(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionRepositoryInterface.create(createSubscriptionDto);
  }
}
