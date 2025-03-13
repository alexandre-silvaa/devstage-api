import { Column, Entity, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'subscription' })
export class SubscriptionEntity extends AbstractEntity<SubscriptionEntity> {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;
}
