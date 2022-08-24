const express = require('express')
const app = express()

const port = 3000

app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', (req, res) => {
    res.send("Ola mundo!")
});

app.listen(port, () => {
    console.log(`servidor ouvindo na porta ${port}`);
});