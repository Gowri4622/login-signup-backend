const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (request,response)=>{
    response.send(`It's working`)
})

app.listen(PORT, console.log(`Server running at http://localhost:${PORT}`))