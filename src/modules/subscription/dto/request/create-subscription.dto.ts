import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({ required: true })
  @IsString({ message: 'O nome informado não é válido' })
  @IsDefined({ message: 'O nome deve ser informado' })
  @IsNotEmpty({ message: 'O nome deve ser informado' })
  @MaxLength(100, { message: 'O nome deve ter até 100 caracteres' })
  name: string;

  @ApiProperty({ required: true })
  @IsDefined({ message: 'O e-mail deve ser informado' })
  @IsNotEmpty({ message: 'O e-mail deve ser informado' })
  @IsEmail(undefined, {
    message: 'O e-mail informado não é válido',
  })
  @Transform(({ value }) => value.toLowerCase())
  @MaxLength(50, { message: 'O email deve ter até 50 caracteres' })
  email: string;
}
