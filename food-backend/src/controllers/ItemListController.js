const jwt = require("jsonwebtoken");
const ItemListModel = require("../models/ItemListModel");

exports.CreateItem = (req,res) => {

    console.log('req : ',req);

    let reqBody = req.body;

    let PostBody = {
        Name: req.body.input['name'],
        Code: req.body.input['code'],
        Image: req.body.input['image'],
        Category: req.body.input['category'],
        Quantity: req.body.input['qty'],
        Price: req.body.input['price'],
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

    ItemListModel.find().then(
        (data) => { 
            return res.status(200).json({status:'success',data:data});  
        },
        (err) => { 
            return res.status(400).json({status:'fail',data:err});
        }
    );
}

exports.GetItem = (req,res) => {

    ItemListModel.find({
        _id: req.body['id']
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

    let _id = reqBody.input['_id'];

    let PostBody = {
        Name: req.body.input['name'],
        Code: req.body.input['code'],
        Image: req.body.input['image'],
        Category: req.body.input['category'],
        Quantity: req.body.input['qty'],
        Price: req.body.input['price'],
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

    let _id = req.body['id'];

    console.log(_id);

    ItemListModel.deleteOne({_id:_id}).then(
        (data) => { 
            return res.status(200).json({status:'success',data:data});  
        },
        (err) => { 
            return res.status(400).json({status:'fail',data:err});
        }
    );
}
