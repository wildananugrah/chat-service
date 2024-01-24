// import { deleteMessageRequest, sendMessageRequest } from '../plugins/services.plugin.js';

/**
  * @param {Socket} io
  * @param {Object} data - should have these props: room, sender
  */

export const online = async (io, data) => {
  console.log(`${new Date().getTime()} - (${data.room}) online`);
  io.to(data.room).emit('online', { room: data.room, sender_id: data.sender_id });
};

/**
  * @param {Socket} io
  * @param {Object} data - should have these props: room, sender
  */

export const offline = async (io, data) => {
  console.log(`${new Date().getTime()} - (${data.room}) offline`);
  io.to(data.room).emit('offline', { room: data.room, sender_id: data.sender_id });
};

/**
  * @param {Socket} io
  * @param {Object} data - should have these props: room, sender
  */

export const refreshRoom = async (io, data) => {
  console.log(`${new Date().getTime()} - (${data.room}) refresh`);
  io.to(data.room).emit('refresh_room', { room: data.room });
};

/**
  * @param {Socket} io
  * @param {Object} data - should have these props: room, sender
  */

export const startTyping = async (io, data) => {
  console.log(`${new Date().getTime()} - (${data.room}) start_typing`);
  io.to(data.room).emit('start_typing', { room: data.room, sender_id: data.sender_id });
};

/**
  * @param {Socket} io
  * @param {Object} data - should have these props: room, sender
  */

export const stopTyping = async (io, data) => {
  console.log(`${new Date().getTime()} - (${data.room}) stop_typing`);
  io.to(data.room).emit('stop_typing', { room: data.room, sender_id: data.sender_id });
};

/**
  * @param {Socket} io
  * @param {Socket} socket
  * @param {Object} data - should have these props: room, content, attachment
  */

export const sendMessage = async (io, socket, data) => {
  try {
    // const res = await sendMessageRequest(socket.handshake.query.auth, data);
    // if (res.status !== 200)
    //   return socket.emit('send_error', { data, error: await res.json() });

    console.log(`${new Date().getTime()} - (${data.room}) receive_message`);
    io.to(data.room).emit('receive_message', data);
  } catch (err) {
    socket.emit('send_error', { data, error: err });
  }
};

/**
  * @param {Socket} io
  * @param {Socket} socket
  * @param {Object} data - should have these items: array of ids
  */

export const deleteMessage = async (io, socket, data) => {
  try {
    // const res = await deleteMessageRequest(socket.handshake.query.auth, data.message);
    // if (res.status !== 200)
    //   return socket.emit('send_error', { data, error: await res.json() });

    console.log(`${new Date().getTime()} - (${data.room}) receive_message`);
    io.to(data.room).emit('receive_message', await res.json());
  } catch (err) {
    socket.emit('send_error', { data, error: err });
  }
};