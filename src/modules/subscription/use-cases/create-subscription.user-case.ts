import { Inject, Injectable } from '@nestjs/common';
import { SubscriptionRepositoryInterface } from 'src/adapters/repositories/subscription/subscription-repository.interface';
import { CreateSubscriptionRequestDto } from '../dto/request/create-subscription.request.dto';

@Injectable()
export class CreateSubscriptionUseCase {
  constructor(
    @Inject('SubscriptionRepositoryInterface')
    private readonly subscriptionRepositoryInterface: SubscriptionRepositoryInterface,
  ) {}

  async execute(createSubscriptionDto: CreateSubscriptionRequestDto) {
    return this.subscriptionRepositoryInterface.create(createSubscriptionDto);
  }
}
