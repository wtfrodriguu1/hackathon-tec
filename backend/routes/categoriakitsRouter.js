const { Router } = require('express');
const router = Router();

const { storeCategoriakits } = require("../controller/categoriakitsController");

router.post('/store/categoriakits', storeCategoriakits);

module.exports = router;
