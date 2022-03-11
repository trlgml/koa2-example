const router = require('koa-router')()
const systemControllers = require('../controllers/system')

router.get('/', systemControllers.indexPage)
router.get('/string', systemControllers.string)
router.get('/cookie', systemControllers.cookie)
router.get('/json', systemControllers.json)


module.exports = router
