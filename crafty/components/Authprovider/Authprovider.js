import React, {
  
  createContext,
  useContext,
  useEffect,
  
  useState,
} from "react";
import * as secureStore from "expo-secure-store";
import axios from "axios";
import ADRESS_API from "../../Api";
export const Authprovider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: false,
    userId: null,
  });
  useEffect(() => {
    const getToken = async () => {
      const token = await secureStore.getItemAsync(Token_Key)
      const ID = await secureStore.getItemAsync(Userid_Key);
      console.log("🚀 ~ file: Authprovider.js:24 ~ getToken ~ ID:", ID)
      console.log("🚀 ~ file: Authprovider.js:14 ~ getToken ~ token:", token);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
          userId : ID
        });
      }
    };
    getToken();
  }, []);

  const SignUp = async (email, password, name, lastname, role) => {
    try {
    const  res=  await axios.post(`http:/${ADRESS_API}:4000/auth/signup`, {
        role:role,
        name: name,
        password: password,
        lastName: lastname,
        email: email,
      });
      if (res.status === 205) {
        return "email Allready exist";
      }
      return res.status;
    } catch (err) {
      return err;
    }}
    const Login = async (email, password) => {
      try {
        const response = await axios.post(`http:/${ADRESS_API}:4000/auth/login`, {
          password: password,
          email: email,
        });
        console.log("🚀 ~ file: Authprovider.js:58 ~ Login ~ response:", response.data)
      
        if(response.status===200){
          console.log("🚀 ~ file: Authprovider.js:63 ~ Login ~ response:", response.data.token)
          
          setAuthState({
            token: response.data.token,
            authenticated: true,
            userId : response.data.id
          });
          axios.defaults.headers.common[
            "Authorization"
          ] = `bearer ${response.data.token}`;
          await secureStore.setItemAsync(Token_Key, response.data.token);
          await secureStore.setItemAsync(Userid_Key, `${response.data.id}`)
          return response.status
        }
        else {
          return response.data
        }
        
        
      } catch (err) {
        return err;
      }
    };
    const Logout = async () => {
      await secureStore.deleteItemAsync(Token_Key);
      axios.defaults.headers.common["Authorization"] = ``;
      setAuthState({ token: null, authenticated: false ,userId :null });
    };

  const value = {
    onSignUp: SignUp,
    onLogin: Login,
    onLogout: Logout,
    authState,
  };
  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};

const Token_Key = "my-jwt";
const Userid_Key ="user-id"
const Authcontext = createContext({});

export const useAuth = () => {
  return useContext(Authcontext);
};

export default Authprovider;
