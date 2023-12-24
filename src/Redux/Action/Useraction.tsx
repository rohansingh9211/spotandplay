import { Dispatch } from "react";
import {BASE_URL} from '../../../Utils/Index'
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
export async function isLoginUser(username:string,password:string){
    const response = await axios.post<string>(`${BASE_URL}operators/1.0/authenticate`, 
    {
        username,
        password
      });
    return response.data;
    
}