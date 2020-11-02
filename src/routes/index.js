const { Router } = require('express');
const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Billy",
        "website": "billyweb.com"
    }
    res.json(data);
});  

module.exports = router;