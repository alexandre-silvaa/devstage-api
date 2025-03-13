import { SubscriptionEntity } from 'src/database/entities/subscription.entity';
import { CreateSubscriptionDto } from 'src/modules/subscription/dto/request/create-subscription.dto';

export interface SubscriptionRepositoryInterface {
  create(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<SubscriptionEntity>;
}
