const express = require('express');
const ItemListController = require('../controllers/ItemListController')
const router = express.Router();

router.post('/CreateItem',ItemListController.CreateItem);
router.post('/SelectItem',ItemListController.SelectItem);
router.post('/UpdateItem',ItemListController.UpdateItem);
router.post('/GetItem',ItemListController.GetItem);
router.post('/RemoveItem',ItemListController.RemoveItem);


module.exports = router;