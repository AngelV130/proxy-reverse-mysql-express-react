import DB from '../../conf/db.js';

const conexionDB = DB

export default async function createTable(){
    try {
        await conexionDB.query(`DROP TABLE IF EXISTS todos;`)
        await conexionDB.query(`
        CREATE TABLE todos (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nombre VARCHAR(255)
        );
        `)
        await conexionDB.query(`
        INSERT INTO todos (nombre) VALUES
            ('To-Do1'),
            ('To-Do2'),
            ('To-Do3');
        `)
    } catch (error) {
        console.error(error)
    }
}