const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors({ origin: "*" }))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Font server listening at localhost:${port}`)
})
