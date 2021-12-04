const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
    const router = express.Router();  

    router.get('/', (req, res) => { 
        collection
        .find()
        .toArray()
        .then((documents) => res.send(documents))
        .catch((error) => {
            console.error(error);
            res.status(500);
            res.json({status: 500, error: error});
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({_id: ObjectID(id)});
    });


   return router;
};



module.exports = createRouter;
