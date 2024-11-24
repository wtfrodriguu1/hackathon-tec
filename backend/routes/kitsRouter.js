const { Router } = require('express');
const router = Router();

const { storeKits } = require("../controller/kitsController");

router.post('/store/kits', storeKits);

module.exports = router;
