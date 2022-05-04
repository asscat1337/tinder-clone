import {Sequelize} from "sequelize";
const {DB,DB_PORT,DB_USER,DB_PASSWORD} = process.env

const connection = new Sequelize(DB!,DB_USER!,DB_PASSWORD!,{
    host:'localhost',
    dialect:'postgres'
})

async function start(){
    try {
        await connection.authenticate()
        await connection.sync({alter:true})
        console.log('connected to database')
    }catch (e) {
        console.log(e)
    }
}

start()

export {
    connection
}