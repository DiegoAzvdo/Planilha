const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorio")
const app = express()

const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorido.listarTransacoes()

    res.send(transacoes)
})

app.listen(port, () => {
    console.log(`servidor ouvindo na porta ${port}`);
});