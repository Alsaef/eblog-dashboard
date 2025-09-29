import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../hook/AxiosInterface';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading]=useState(true)

 const FetchUser=async()=>{
    try {

        const res=await axiosInstance.get('/api/me')
        setUser(res.data)
        setLoading(false)
        
    } catch (error) {
        setUser(null);
      setLoading(false) 
    }
 }

 useEffect(()=>{
    FetchUser()
 },[])

 const login=async(data)=>{
   try {
    const res=await axiosInstance.post('/api/login',data)

    console.log(res);
    FetchUser()
   } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
   }
 }


 const logout=async()=>{
  
     const res= await axiosInstance.post('/api/logout')
     console.log(res.data);

    setUser(null)
  
 }

 const authInfo={
    user,
    loading,
    login,
    logout
 }
 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;