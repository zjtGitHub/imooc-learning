const Koa = require('koa')
const app = new Koa()

const middleware1 = function async(ctx, next) {
    console.log('this is a middleware1')
    console.log(ctx.path)
    next()
    console.log('middleware1 callback')
}
const middleware2 = function async(ctx, next) {
    console.log('this is a middleware2')
    console.log(ctx.path)
    next()
    console.log('middleware2 callback')
}

//next之前顺序执行，next后的回调内容先进后出执行
app.use(middleware1)
app.use(middleware2)

app.listen(3000)