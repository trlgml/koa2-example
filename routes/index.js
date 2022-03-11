const router = require('koa-router')()

const system = require('./system')
const test = require('./test')

router.use('', system.routes(), system.allowedMethods());
router.use('', test.routes(), test.allowedMethods());

module.exports = router
