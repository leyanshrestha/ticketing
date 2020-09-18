import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@lstickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
