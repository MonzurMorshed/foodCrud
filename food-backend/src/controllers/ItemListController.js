const jwt = require("jsonwebtoken");
const ItemListModel = require("../models/ItemListModel");

exports.CreateItem = (req,res) => {
    let reqBody = req.body;

    let PostBody = {
        Name: req.body['name'],
        Code: req.body['code'],
        Image: req.body['image'],
        Category: req.body['category'],
        Quantity: req.body['Qty'],
        Price: req.body['price'],
        ItemCreateDate: Date.now(),
        ItemUpdateDate: Date.now()
    };

    ItemListModel.create(PostBody).then(
        () => { 
            return res.status(200).json({status:'success',data:reqBody});
        },
        (err) => { 
            return res.status(400).json({status:'fail',data:err});
        }
    );
}

exports.SelectItem = (req,res) => {

    let id = req.headers['id'];
    ItemListModel.find({
        _id: id
    }).then(
        (data) => { 
            return res.status(200).json({status:'success',data:data});  
        },
        (err) => { 
            return res.status(400).json({status:'fail',data:err});
        }
    );
}

exports.UpdateItem = (req,res) => {

    let reqBody = req.body;

    let _id = reqBody['_id'];

    let PostBody = {
        Name: req.body['name'],
        Code: req.body['code'],
        Image: req.body['image'],
        Category: req.body['category'],
        Quantity: req.body['Qty'],
        Price: req.body['price'],
        ItemUpdateDate: Date.now()
    };

    ItemListModel.updateOne({_id:_id},{$set:PostBody},{upsert: true}).then(
        (data) => { 
            return res.status(200).json({status:'success',data:data});  
        },
        (err) => { 
            return res.status(400).json({status:'fail',data:err});
        }
    );
}

exports.RemoveItem = (req,res) => {

    let _id = req.body['_id'];

    ItemListModel.deleteOne({_id:_id}).then(
        (data) => { 
            return res.status(200).json({status:'success',data:data});  
        },
        (err) => { 
            return res.status(400).json({status:'fail',data:err});
        }
    );
}
