const express = require('express')
const app = express()
var i = 1

function handleRequest(req, res) {
	res.send('This page has been visited: '+i+' times')
	i++
}

app.get('/', handleRequest)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
