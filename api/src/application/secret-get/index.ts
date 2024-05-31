import { SecretModel } from "@infrastructure/no-sql/models/secret";
const SecretName = "Cryptographic-TP-Consign";

export const getCryptographicSecret = async (): Promise<string> => {
    const result = await SecretModel.findOne({ name: SecretName });
    return result?.value ?? "";
}