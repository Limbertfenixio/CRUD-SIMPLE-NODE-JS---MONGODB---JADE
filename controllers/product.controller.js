
const Product = require('../models/product.model');

exports.index = function(req, res){
    Product.find({},function(err, product){
        if(err){
            res.send('error: ' + err);
        }else{
            res.render('index',{productos : product});
        }
    })
};

exports.product_create = function(req, res){
    res.render('create');
}

exports.product_store = function(req, res){
    let product = new Product({
        nombre: req.body.nombre,
        precio: req.body.precio
    });

    product.save(function(err) {
        if(err){
            res.send('error: ' + err)
        }else{
            res.redirect('/products')
        }
    })
};

exports.product_details = function(req ,res){
    Product.findById(req.params.id , function(err, product){
        if(err){
            res.send('error: ' + err);
        }
        res.send(product);
    });
};

exports.product_edit = function(req, res){
    Product.findById(req.params.id, function(err , product){
        if(err){
            res.send('error: ' + err);
        }else{
            res.render('edit', {product: product});
        }
    })
}

exports.product_update = function(req, res){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product){
        if(err){
            console.log('error: ' + err);
        }else{
            res.redirect('/products');
        }
    });
};

exports.product_delete = function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err, product){
        if(err){
            res.send('error: ' + err);
        }else{
            res.redirect('/products');
        }
    })
};