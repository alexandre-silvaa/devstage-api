import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  constructor(config: { id: string; name: string; email: string }) {
    this.id = config.id;
    this.name = config.name;
    this.email = config.email;
  }
}
