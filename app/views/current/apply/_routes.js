const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Left an example route here
// What do you want to do? - new-application.html
// router.post('/newApplication', function (req, res) {
//   var newApplication = req.session.data['new-application']
//   if (newApplication == "new") {
//     res.redirect('apply/where-do-you-live')
//   }
//   else if (newApplication == "replacement") {
//     res.redirect('replacement/next-steps')
//   }
//   else {
//     res.redirect('new-application')
//   }
// })

// Who are you applying for?
router.post('/who-apply-for', function (req, res) {
  var applyFor = req.session.data['applyFor']
  if (applyFor == "Myself") {
    res.redirect('/receiving-treatment')
  }
  else {
    res.redirect('/who-apply-for')
  }
})

//

module.exports = router