const router = require('koa-router')()
const uploadControllers = require('../controllers/upload')

router.prefix('/upload')

router.post('/', uploadControllers.upload)

module.exports = router
