import { Schema, model } from "mongoose";

const SecretSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const SecretModel = model('Secret', SecretSchema, 'secret');

export {
    SecretModel
}