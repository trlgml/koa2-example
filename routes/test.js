const router = require('koa-router')()
const testControllers = require('../controllers/test')

router.prefix('/test')

router.get('/upload', testControllers.upload)

module.exports = router
