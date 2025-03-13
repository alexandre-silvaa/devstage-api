import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { CreateSubscriptionUseCase } from './use-cases/create-subscription.user-case';
import { AdaptersModule } from 'src/adapters/adapters.module';

@Module({
  imports: [AdaptersModule],
  controllers: [SubscriptionController],
  providers: [CreateSubscriptionUseCase],
})
export class SubscriptionModule {}
