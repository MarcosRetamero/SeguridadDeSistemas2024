import "dotenv/config";
import "reflect-metadata";
import "./aliases";
import api from "@api/server";
import {
    initFirebaseAdmin,
    initFirebaseClient
} from "@api/auth";
import { connect } from "@infrastructure/database";

initFirebaseAdmin();
initFirebaseClient();
api.listen(process.env.PORT);
connect();


console.log(`Listening on port ${process.env.PORT}`);
