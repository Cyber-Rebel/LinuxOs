import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null) // pahele ek constext creation 

const AuthWapper=(props)=>{
    
    // const [Authvaid,SetAuthvaid]= useState(localStorage.getItem('vaild')=='true'?true:false)
    const [Authvaid,SetAuthvaid]= useState(false)



 return(
<AuthContext.Provider value={{Authvaid,SetAuthvaid}}>
    {props.children}
</AuthContext.Provider>
 )}

 export default AuthWapper;