const express = require('express');
const {
    getStocks,
    getStock,
    createStock,
    deleteStock,
    updateStock
} = require('../controllers/StockController');
const router = express.Router();

router.get('/', getStocks);
router.get('/:name', getStock);

router.post('/', createStock);

router.delete('/:name', deleteStock);

router.patch('/:name', updateStock);

router.use('/*', function(req, res, next) {
    res.json({mssg: 'Page not available'});
})

module.exports = router;