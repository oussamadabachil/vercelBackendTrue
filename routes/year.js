var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req, res)=>{
  let yearDate = new Date().getFullYear()
  res.json({year:yearDate});
});

module.exports = router;
