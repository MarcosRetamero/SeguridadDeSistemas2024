import axios from 'axios';
import { UserLoginRequestDto } from "./user-login-request-dto";
import { UserLoginResponseDto } from "./user-login-response-dto";
import { ValidationError } from "@application/validation-error";

const SITE_SECRET_KEY = '6LeTh70pAAAAAFAbtvmfxJJ9nI6q48JlQWUjgC1W'; // Clave secreta de reCAPTCHA proporcionada por Google
const STATIC_USER = 'seguridad@utn.com';
const STATIC_PASSWORD = 'seguridad';
const STATIC_TOKEN = 'a1b2c3';

export default async (dto: UserLoginRequestDto): Promise<UserLoginResponseDto> => {
    try {
        // Verifica el token de reCAPTCHA
        const recaptchaToken = dto.recaptchaToken; // Obtiene el token de reCAPTCHA del DTO

        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: SITE_SECRET_KEY,
                response: recaptchaToken,
            },
        });

        if (!response.data.success) {
            throw new ValidationError("reCAPTCHA validation failed");
        }

        // Verifica las credenciales estáticas
        if (dto.name !== STATIC_USER || dto.password !== STATIC_PASSWORD) {
            throw new ValidationError("Invalid Credentials");
        }

        // Si todo está correcto, crea y devuelve la respuesta
        const responseDto = new UserLoginResponseDto(STATIC_TOKEN);
        return responseDto;

    } catch (error) {
        throw new ValidationError("Unexpected Error. Contact your admin ERROR EN INDEX.TS!");
    }
};
