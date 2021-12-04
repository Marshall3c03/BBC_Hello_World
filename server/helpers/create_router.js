const express = require('express');

const createRouter = function (collection) {
    const router = express.Router();  

    router.get('/', (req, res) => { 
        collection
        .find()
        .toArray()
        .then((documents) => res.send(documents))
    });

   return router;
};



module.exports = createRouter;
