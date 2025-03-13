import { SubscriptionRepositoryAdapter } from './subscription/subscription.adapter';

export const RepositoryProvider = [
  SubscriptionRepositoryAdapter,
  {
    provide: 'SubscriptionRepositoryInterface',
    useExisting: SubscriptionRepositoryAdapter,
  },
];
