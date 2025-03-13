import { DatabaseModule } from 'src/database/database.module';
import { RepositoryProvider } from './repositories/repository.provider';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [...RepositoryProvider],
  exports: [...RepositoryProvider],
})
export class AdaptersModule {}
