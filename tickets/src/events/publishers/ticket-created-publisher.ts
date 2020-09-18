import { Publisher, Subjects, TicketCreatedEvent } from '@lstickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
