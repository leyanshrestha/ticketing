import { Publisher, OrderCreatedEvent, Subjects } from '@lstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

// new OrderCreatedPublisher(natsClient).publisher({

// })
