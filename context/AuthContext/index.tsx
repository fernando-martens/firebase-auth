import React, { createContext } from "react";
import { AuthContextData, ISignInData } from "./interface";


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }){

	const isAuthenticated = false;


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
