import "dotenv/config";
import "reflect-metadata";
import "./aliases";
import api from "@api/server";
import {
    initFirebaseAdmin,
    initFirebaseClient
} from "@api/auth";
import { sqlConnect } from "@infrastructure/sql";
import { noSqlConnect } from "@infrastructure/no-sql";
import { upsertSecret } from "@application/secret-upsert";

initFirebaseAdmin();
initFirebaseClient();
api.listen(process.env.PORT);
sqlConnect();
noSqlConnect();
upsertSecret();

console.log(`Listening on port ${process.env.PORT}`);
