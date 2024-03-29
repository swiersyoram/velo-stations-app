export interface IAuth {
    username: string;
    password: string;
}

export interface IUser {
    username: string;
    token: string;
    isAuthenticated: boolean;
}