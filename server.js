const Koa = require('koa');
const cors = require('@koa/cors');

const q = require('./data/questions.json')

const app = new Koa();
app.use(cors());

app.use(async ctx => {
  ctx.body = q;
});

app.listen(3001);