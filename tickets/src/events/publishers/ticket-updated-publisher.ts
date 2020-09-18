import { Publisher, Subjects, TicketUpdatedEvent } from '@lstickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
