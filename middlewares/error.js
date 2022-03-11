module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error);
    return ctx.body = {
      message: '错误'
    }
  }
}