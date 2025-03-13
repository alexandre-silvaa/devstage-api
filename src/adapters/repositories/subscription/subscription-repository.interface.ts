import { SubscriptionEntity } from 'src/database/entities/subscription.entity';
import { CreateSubscriptionRequestDto } from 'src/modules/subscription/dto/request/create-subscription.request.dto';
import { CreateSubscriptionResponseDto } from 'src/modules/subscription/dto/response/create-subscription.response.dto.';

export interface SubscriptionRepositoryInterface {
  create(
    createSubscriptionDto: CreateSubscriptionRequestDto,
  ): Promise<CreateSubscriptionResponseDto>;
}
