import React, { useState,useContext } from 'react';
import image from '../assets/image.png';
import avate from '../assets/avate.png';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/Authcontext';
import Desktop from '../Desktop/Desktop.jsx';

const LockScreen = () => {
  // const [show,setshow] = useState(true)

  // <motion.div animate={{ x: [null, 100, 0] }} />
  const {Authvaid,SetAuthvaid} = useContext(AuthContext)
  console.log(Authvaid)
  const [enpashow, setEnpashow] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  
  const {register,handleSubmit,reset} = useForm();
  
  const formdata=(data)=>{
      if(localStorage.getItem('password')===data.password){
        alert('user is found  you can login ')
        localStorage.setItem('valid',true)
        SetAuthvaid(true)
      }else{
        alert('user password should correct')
      }
  reset()

}


// console.log(Authvaid)
  return (<>
     {Authvaid? <Desktop/>:( <div className="bg-[#241F21] w-full h-screen">  
      {/* Authvaid ye wala agar dekha yahe to ye localStorage nahi aaraha hae  */}
      <div className="flex flex-col gap-[33%] justify-end p-10 w-[27%] h-screen ml-[38%] items-center">
        
      
        {enpashow ? (
          <div onClick={() => setEnpashow(false)}>
            <div className="name h-[13%] w-full text-center">
              <div className="w-full flex items-center rounded-2xl border-gray-700 border-2">
                <img className="w-[22%] p-5" src={avate} alt="avatar" />
                <h1 className="text-3xl text-amber-50 ml-4">CYBER-REBEL</h1>
              </div>
              <div className="text-start mt-4 text-amber-50">Not Listed?</div>
            </div>
          </div>
        ) : (
       
          <div className="w-full flex flex-col items-center gap-6 p-6 rounded-2xl">
            <img className="w-45 rounded-full" src={avate} alt="avatar" />
            <h1 className="text-4xl text-amber-50 mb-2">CYBER-REBEL</h1>
            
              <form className='w-full overflow-hidden  ' onSubmit={handleSubmit(formdata)} >
            <div className="w-full relative flex items-center gap-2 justify-center">
              <IoIosArrowBack
                onClick={() => setEnpashow(true)}
                className="bg-gray-600 text-white w-10 h-10 rounded-full cursor-pointer"
              />
         
              <input

                {...register('password')}
                name='password'
                className="w-[88%] px-4 border border-gray-600 py-2 bg-[#2D2628] rounded-lg text-white focus:outline-none "
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
              />
              
             
              {showPassword ? (
                <FaEye
                  className="text-white text-2xl absolute right-7 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="text-white text-2xl absolute right-7
                   cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            <button ></button>
            </div>
              </form>
            
          </div>
        )}

        <div className="w-full flex justify-center items-end gap-3 mr-3">
          <img src={image} className="w-19" alt="ubuntu logo" />
          <h1 className="text-center text-white text-7xl">Ubuntu</h1>
        </div>
      </div>
    </div> )}
    </>
  );
};

export default LockScreen;

// import React from 'react'

// const LockScreen = () => {
  // vaild return
//   return (                           
//     <div>LockScreen</div>
//   )
// }
// Not vild Resopn 
// return (                           
//    {show?"ram":"sham "} ek do div render hore hae ese like ese slove karne ke liye ham ek kam karege 
//   )
// vaild rasoon 
//  return (   
// <>                        
//    {show?"ram":"sham "} ek do div render hore hae ese like ese slove karne ke liye ham ek kam karege 
// </>
//   )

// export default LockScreen