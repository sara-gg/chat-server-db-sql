const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = require('./routes/routes');

const port = 3010;

app.use(serve('./client'));
app.use(bodyParser()); // attach body of request to ctx.request.body
app.use(router.routes());

app.listen(port, () => {
  console.log(`app running on: http://localhost:${port}`); // eslint-disable-line
})
