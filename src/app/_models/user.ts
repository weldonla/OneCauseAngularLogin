export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    token: string;

    constructor(init?: Partial<User>) {
        this.id = null;
        this.username = null;
        this.password = null;
        this.name = null;
        this.email = null;
        this.token = null;

        Object.assign(this, init);
    }
}