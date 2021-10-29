import { createContext, useContext, useState } from "react";
import axios from "axios";

import ProvidersTypeProps from "../../Interfaces/ProvidersProps";
import UserData from "../../Interfaces/UserData";
import { useHistory } from "react-router";

interface AuthProviderData {
    token: string;
    signOut: () => void;
    signIn: (data: UserData) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({children}: ProvidersTypeProps) =>{
    const history = useHistory();
    const [token, setToken ] = useState(
        ()=> localStorage.getItem("token") || ""
    );

    const signOut = () => {
        localStorage.clear();
        setToken("")
        history.push("/")
    }

    const signIn = (data: UserData) => {
        axios.post("https://kenziehub.herokuapp.com/sessions", data)
        .then((response) => {
          localStorage.setItem("token", JSON.stringify(response.data.token));
        
          setToken(response.data.token);
          
          history.push("/dashboard");
        })
        .catch((err) => console.log(err));
    };


    return(
        <AuthContext.Provider value={{token, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuth = () => useContext(AuthContext);