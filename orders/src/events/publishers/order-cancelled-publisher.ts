import { Publisher, OrderCancelledEvent, Subjects } from '@lstickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
