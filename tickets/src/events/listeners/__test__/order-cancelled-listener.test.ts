import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { OrderCancelledEvent } from '@lstickets/common';
import { OrderCancelledListeneer } from '../order-cancelled-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/ticket';
import { updateTicketRouter } from '../../../routes/update';

const setup = async () => {
  const listener = new OrderCancelledListeneer(natsWrapper.client);
  const orderId = mongoose.Types.ObjectId().toHexString();

  const ticket = Ticket.build({
    title: 'conert',
    price: 20,
    userId: 'asdf'
  });
  ticket.set({ orderId });
  await ticket.save();

  const data: OrderCancelledEvent['data'] = {
    id: orderId,
    version: 0,
    ticket: {
      id: ticket.id
    }
  };
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return { msg, data, ticket, orderId, listener };
};

it('udpates the ticket,publishes an event and ack the message', async () => {
  const { msg, data, ticket, orderId, listener } = await setup();
  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);
  expect(updatedTicket!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
