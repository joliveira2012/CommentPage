class Tables {
    init(connection) {
        this.connection = connection
        this.createTableComments()
    }

    createTableComments() {
        const sql = 'CREATE TABLE IF NOT EXISTS comments ' + 
        '(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
        'text varchar(300) NOT NULL,' +
        'created_date DATETIME NOT NULL)'

        this.connection.query(sql, error => {
            if(error) {
                console.log(error)
            } else {
                console.log('Tabela comments criada com sucesso')
            }
        })
    }
}

module.exports = new Tables