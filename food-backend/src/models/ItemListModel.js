const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name: {type: String},
    Code: {type: String},
    Image: {type: String},
    Category: {type: String},
    Quantity: {type: Number},
    Price: {type: Number},
    ItemCreateDate: {type: Date},
    ItemUpdateDate: {type: Date}
},{versionKey:false});

const ItemListModel = mongoose.model('Itemlist',DataSchema);
module.exports = ItemListModel;