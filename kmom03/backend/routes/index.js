var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Jag heter Frida sjdkfhsdkjfhdjks"
        }
    };

    res.json(data);
});

module.exports = router;
