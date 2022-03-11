const testServices = require('../services/test')

module.exports = {
  async upload(ctx) {
    const story = await testServices.uploadFile(ctx)

    ctx.body = story
  }

}