const Router = require('koa-router'); 

const messagesController = require('../controllers/messages');
const router =  new Router();

router.get('/messages', messagesController.getMessages)

router.post('/messages', messagesController.postMessage)

module.exports = router;
