import { Sequelize } from "sequelize";

const db =process.env.DB_NOME ;
const user =process.env.DB_USER ;
const pass =process.env.DB_PASS ;
const host =process.env.DB_HOST ;

const connection = new Sequelize(db, user, pass, {
    host,
    dialect: "mysql",
});

async function authenticate() {
    try {
        await connection.authenticate();
        await connection.sync();
        console.log("Deu bom no server");
    } catch (erro) {
        console.error("Deu ruim no server, confere ai:", erro);
    }
}

export default authenticate;
export {connection};