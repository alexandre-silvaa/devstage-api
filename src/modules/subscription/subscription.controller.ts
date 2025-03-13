import { Controller, Post, Body } from '@nestjs/common';
import { CreateSubscriptionRequestDto } from './dto/request/create-subscription.request.dto';
import { CreateSubscriptionUseCase } from './use-cases/create-subscription.user-case';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSubscriptionResponseDto } from './dto/response/create-subscription.response.dto.';

@ApiTags('subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(
    private readonly createSubscriptionUseCase: CreateSubscriptionUseCase,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Criar uma inscrição',
  })
  @ApiResponse({
    status: 201,
    description: 'Inscrição criada com sucesso',
    type: CreateSubscriptionResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
  })
  @ApiResponse({
    status: 401,
    description: 'Operação não autorizada',
  })
  create(@Body() createSubscriptionDto: CreateSubscriptionRequestDto) {
    return this.createSubscriptionUseCase.execute(createSubscriptionDto);
  }
}
