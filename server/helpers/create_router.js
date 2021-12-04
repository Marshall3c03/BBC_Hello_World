const express = require('express');

const createRouter = function (collection) {
    const router = express.Router();  

    router.get('/', (req, res) => { 
       
    });

   return router;
};



module.exports = createRouter;
