const app = require('express')()

app.get('/test', (req, res) => {
    setTimeout(() => {
        return res.json({
            test: 'hello world!!'
        })
    }, 2000)
})


app.listen(8080, (err) => {
    if (err) {
        return console.log('cannot start server')
    }
    console.log('Server was running on port 8080')
})