const express = require('express')

const app = express()

const PORT = 3002;

app.listen(PORT, function(){
  console.log("succesfully runing at http://localhost:" +PORT)
})
app.use(express.static("frontend"))
app.listen