
module.exports = {
  async indexPage(ctx) {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  },
  async string(ctx, next) {
    ctx.body = 'koa2 string'
  },
  async cookie(ctx, next) {
    console.log('获取cookie', ctx.cookies.get('cid'));
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain: 'localhost',  // 写cookie所在的域名
        path: '/cookie',       // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        // expires: new Date(),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
      }
    )
    ctx.body = 'cookie is ok'
  },
  async json(ctx, next) {
    ctx.body = {
      title: 'koa2 json'
    }
  }

}