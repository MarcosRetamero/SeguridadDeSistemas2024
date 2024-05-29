import { Dialect, Sequelize } from 'sequelize';

let dialtect: Dialect;

switch(process.env.DB_DIALECT) {
    case('mssql'):
        dialtect = 'mssql'
    break;
    default:
        dialtect = 'mysql'
    break;
}

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: dialtect,
        dialectOptions: {
            encrypt: true
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        port: process.env.DB_PORT,
    }
);

export const connect = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('DB Connection successful');
    } catch (err) {
        console.log('Unable to connect to database', err);
    }
};
