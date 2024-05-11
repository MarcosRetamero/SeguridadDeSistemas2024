import { HttpHandler } from '@/services/http-handler';

const getUserList = () => HttpHandler.get(`/user`);

class GetUserListResponse {
    email: string|null
    id: string|null

    constructor(id: string|null = null, email: string|null = null) {
        this.email = email;
        this.id = id;
    }
}

export {
    getUserList,
    GetUserListResponse
}