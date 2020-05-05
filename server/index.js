const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')

connection.connect(error => {
    if(error) {
        console.log(error)
    } else {
        console.log('conectado com sucesso')
        
        Tables.init(connection)
        
        const app = customExpress()

        app.listen(8080, () => console.log('Servidor rodando na porta 8080'))
    }
})
