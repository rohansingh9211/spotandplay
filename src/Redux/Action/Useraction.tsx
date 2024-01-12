import { Dispatch } from "react";
import {BASE_URL} from '../../../Utils/Index'
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export async function isLoginUser(username:string,password:string){
    const response = await axios.post<string>(`${BASE_URL}customer/1.0/authenticate`, 
    {
      username,
      password
      });
      console.log(response,'----');
      
    await AsyncStorage.setItem('access_token',response.data.data.access_token)
    return response.data;
    
}
export async function isRegistered(data:any){
  console.log('noe');
  
  const response = await axios.post<string>('https://api.de2.spotandplay.com/crrs_customer_service/customer/1.0/customer', data);
  console.log(response,'-=======');
  
  return response;
}