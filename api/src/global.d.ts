declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string
        UI_URL: string
        NODE_ENV: string
        GOOGLE_RECAPTCHA_SCORE: string
        GOOGLE_RECAPTCHA_PRIVATE_KEY: string
        DB_NAME: string
        DB_USER: string
        DB_PASSWORD: string
        DB_HOST: string
        DB_PORT: number
        MONGO_STR_CONNECTION: string
    }
}