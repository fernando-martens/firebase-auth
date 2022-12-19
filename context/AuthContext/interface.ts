export interface AuthContextData{
    isAuthenticated: boolean;
    signIn: (data: ISignInData) => void;
}

export interface ISignInData{
    email: string;
    password: string;
}
