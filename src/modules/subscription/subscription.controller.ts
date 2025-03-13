import { Controller, Post, Body } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/request/create-subscription.dto';
import { CreateSubscriptionUseCase } from './use-cases/create-subscription.user-case';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(
    private readonly createSubscriptionUseCase: CreateSubscriptionUseCase,
  ) {}

  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.createSubscriptionUseCase.execute(createSubscriptionDto);
  }
}
