const express = require('express');

const createRouter = function (collection) {
    const router = express.Router();  

    router.get('/', (req, res) => { 
        collection
        .find()
        .toArray()
    });

   return router;
};



module.exports = createRouter;
