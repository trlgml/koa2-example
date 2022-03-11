const router = require('koa-router')()

const system = require('./system')
const upload = require('./upload')

router.use('', system.routes(), system.allowedMethods());
router.use('', upload.routes(), upload.allowedMethods());

module.exports = router
