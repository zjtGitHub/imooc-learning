const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

//前缀
router.prefix('/api')

router.get('/', async (ctx) => {
    let result = await new Promise(resolve => {
        setTimeout(function () {
            resolve('2s later')
        },2000)
    })
    ctx.body = result
})
router.get('/api', ctx => {
    const params = ctx.request.query
    console.log(params)
    ctx.body = {...params}
})
router.post('/post', ctx => {
    let { body } = ctx.request
    ctx.body = {
        ...body,
        ...JSON.parse(JSON.stringify(ctx.response))
    }

    console.log(ctx.response)
})

app.use(koaBody())
app.use(cors())
//allowedMethods相当于是一个拦截器，如果访问项目中没有的请求，就返回4xx 5xx的错误
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)