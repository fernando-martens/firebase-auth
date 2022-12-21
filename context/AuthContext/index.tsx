import React, { createContext } from "react";
import { AuthContextData, ISignInData } from "./interface";


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }){

	const isAuthenticated = false;


	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function signIn(data: ISignInData){
        
	}


	return (
		<AuthContext.Provider value={{
			isAuthenticated,
			signIn
		}}>
			{children}
		</AuthContext.Provider>
	);

}
