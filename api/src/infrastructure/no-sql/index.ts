import { connect } from "mongoose";

export const noSqlConnect = async () => {
    try {
        await connect(process.env.MONGO_STR_CONNECTION);
        console.log('NO SQL: DB Connection successful');
    } catch (err) {
        console.log('NO SQL: Unable to connect to database', err);
    }
};