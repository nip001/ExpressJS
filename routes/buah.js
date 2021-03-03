const express = require('express');
const router = express.Router();
const buahController = require('../controller/buahController')

router.route('/')
    .post(buahController.insertBuah)
    .get(buahController.getAllBuah)

router.route('/:rasa')
    .get(buahController.getDataBuahByRasa)
    .patch(buahController.updateBuah)
    .delete(buahController.deleteBuah)

router.route('/harga/:harga')
    .get(buahController.getDataBuahByHarga)

module.exports = router;