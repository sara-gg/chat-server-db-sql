const messageModel = require('../models/messages');


const getMessages = async (ctx) => {
  try {
    ctx.body = await messageModel.getMessages();
  } catch (e) {
    ctx.status = 500;
  }
}

const postMessage = async (ctx) => {
  try {
    // save message to db
    await messageModel.postMessage(ctx.request.body);
    // return the newly created message
    ctx.body = ctx.request.body; 
    console.log('ctx.body', ctx.body);
    // return correct status
    ctx.status = 201

  } catch (e) {
    ctx.status = 500;
    console.log(e);
  }
}


module.exports = {
  getMessages,
  postMessage
}
