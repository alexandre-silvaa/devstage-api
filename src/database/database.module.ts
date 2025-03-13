import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_URL } from '../shared/constants/constants';
import { Entities } from './entity.index';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        url: DB_URL,
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([...Entities]),
  ],
  exports: [TypeOrmModule.forFeature([...Entities])],
})
export class DatabaseModule {}
