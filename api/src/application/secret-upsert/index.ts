import {SecretModel} from "@infrastructure/no-sql/models/secret";
const SecretName = "Cryptographic-TP-Consign";
const SecretValue = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTU0ktVVROIiwiaWF0IjpudWxsLCJleHAiOm51bGwsImF1ZCI6Ind3dy5zc2ktdXRuLmNvbSIsInN1YiI6InRwLTA4IiwiZW5kcG9pbnQiOiJodHRwczovL3NzaS11dG4ucmouci5hcHBzcG90LmNvbS90cC1jcnlwdG9ncmFwaHkiLCJhdXRoLXVzZXIiOiJTU0kiLCJhdXRoLXBhc3N3b3JkIjoiVVROLUZSQ1UiLCJvcGVyYXRpb24iOiJHRVQifQ.vPak_HstMeVUO314VN1O8emhNSMnaGB0FuzmYhc-ypI";

export const upsertSecret = async () => {
    const secret = {
        name: SecretName,
        value: SecretValue,
    };
    
    await SecretModel.findOneAndUpdate(
        { name: SecretName },
        secret,
        {
            new: true,        // Retorna el documento nuevo modificado
            upsert: true,     // Crea un nuevo documento si no se encuentra uno que coincida con el filtro
            overwrite: true   // Reemplaza completamente el documento existente
        }
    );

}