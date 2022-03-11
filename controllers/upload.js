const uploadServices = require('../services/upload')

module.exports = {
  async upload(ctx) {
    const story = await uploadServices.uploadFile(ctx)

    ctx.body = story
  }

}