class User {
    constructor(name, username, password, email) {
        this.id = 0
        this.name = name
        this.username = username
        this.password = password
        this.email = email
        this.login = 0
    }

    addUserSQL() {
        let sql = `INSERT INTO USERS(name, username, password, email, login, createdDate) \
                        VALUES('${this.name}', '${this.username}', '${this.password}', '${this.email}', 0, NOW())`
        return sql
    }

    updateUserByIdSQL(id) {
        let sql = `UPDATE USERS \
                    SET name = '${this.name}', username = '${this.username}', password = '${this.password}', email = '${this.email}', login = ${this.login} \
                    WHERE id =  ${id}`
        return sql
    }

    // static是與實例化無關
    static getUserByIdSQL(id) {
        let sql = `SELECT * FROM USERS WHERE id = ${id}`
        return sql
    }

    // login用
    getUserUserByUsernameAndPasswordSQL() {
        let sql = `SELECT * FROM USERS WHERE username = '${this.username}' AND password =  '${this.password}' LIMIT 0,1`
        return sql
    }

    // static是與實例化無關
    static getUserByQuerySQL(query) {
        const where = []

        if (query.name) where.push(`name = '${query.name}'`)
        if (query.email) where.push(`email = '${query.email}'`)
        if (query.username) where.push(`username = '${query.username}'`)

        let sql = ''

        if (where.length) sql = `SELECT * FROM USERS WHERE ` + where.join(' AND ')
        else sql = `SELECT * FROM USERS`

        return sql
    }

    static deleteUserByIdSQL(id) {
        let sql = `DELETE FROM USERS WHERE ID = ${id}`
        return sql
    }

    static getAllUserSQL() {
        let sql = `SELECT * FROM USERS`
        return sql
    }
}

export default User;