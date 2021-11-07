const express = require('express')
const bodyParser = require('body-parser')
const PostController = require('./controllers/PostController')

const port = 8080
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Healthy!')
})

//Post controller block
app.get('/api/posts', PostController.read)

app.post('/api/posts', PostController.create)

app.put('/api/posts', PostController.update)

app.delete('/api/posts', PostController.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})