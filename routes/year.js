var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req, res)=>{
  let yearDate = new Date().getFullYear().toString()
  res.json({year:yearDate});
});

module.exports = router;
