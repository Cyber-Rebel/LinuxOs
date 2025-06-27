import React, { useState,useEffect } from 'react';


const useDragable= () => {
    const [position, setPosition] = useState({ x: 0 , y: 0 });
  const [isDragging, SetisDragging] = useState(false)
  console.log(position)

 const handleMouseDown = () => {
     SetisDragging(true);
  };

  
  const handleMouseUp = () => {
   SetisDragging(false);
  }

  const handleMouseMove = (e) => {
   if (isDragging) {
      setPosition({ x:e.clientX-10, y:e.clientY-10 });
    }
  };
   useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove); // ye handlemouse Move and mouse move ko parrel work hotil  ese ek  fakdat hau ki jab funcation drage to clear samjega 
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);





  return {position,  handleMouseUp,handleMouseDown}
}

export default useDragable

 /// return ahmeash kuch value funatio hoga kaabhhi div mat return karo 
// return div nahi hoga kch funationaliyt hogi 


// return me dekhna ki kya cchaiye main code jo badl ra hae 


// first mene code ko smja fir use drag wal use kiya then mene us code deka use ko kon paratmet  chnage ho rahe then theke ki 
// ye bar bar use hora hae to mene ek kam kiya socha ki use hook band du wo code liye fir use div wala part hata then mene us code 
// return jo lena tha jo value use return kiya and use kiya use return me pass kiya bbba sirf
 // vahar par kam hor hae ki useState x and y value orveride har baarrr to problem ki koi baat nahi hae 

 // funcation overlading matlb ki 
 // function abd(a=10){
//  console.log(a)
//  }
// abd() // output 10 

// 
//  function abd(a=10){
//  console.log(a)
//  }
// abd(13) // output 13

// 


// setDraging natat -- mouse move zala natar--mouse move madhe postion set kart gelo and  mouseup par elemt sutel teva element drag tadla 