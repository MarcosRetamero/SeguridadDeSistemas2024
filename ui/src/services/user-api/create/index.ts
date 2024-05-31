import { HttpHandler } from '@/services/http-handler';

const createUser = (data: CreateUserRequest) => HttpHandler.post(`/user`, data);

class CreateUserRequest {
    name: string
    resumme: string
    password: string

    constructor(name: string|null = null, password: string|null = null, resumme: string|null = null) {
        this.name = name ?? "";
        this.resumme = resumme ?? "";
        this.password = password ?? "";
    }
}

export {
    createUser,
    CreateUserRequest
}