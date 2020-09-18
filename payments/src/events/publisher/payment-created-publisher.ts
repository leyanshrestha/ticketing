import { Subjects, Publisher, PaymentCreatedEvent } from '@lstickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
