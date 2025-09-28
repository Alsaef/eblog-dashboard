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
    console.log(res.data);
    FetchUser()
   } catch (error) {
    throw new Error(err.response?.data?.error || "Login failed");
   }
 }

 const authInfo={
    user,
    loading,
    login
 }
 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;