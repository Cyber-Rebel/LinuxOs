import React from 'react'
import Ubuntu from '../assets/Background/Ubuntu.jpg'
import Ubuntu1 from '../assets/Background/Ubuntu1.jpg'
import Ubuntu2 from '../assets/Background/Ubuntu2.png'
import Ubuntu3 from '../assets/Background/Ubuntu3.jpg'
import Ubuntu4 from '../assets/Background/Ubuntu4.png'
import Ubuntu5 from '../assets/Background/Ubuntu5.png'
import Ubuntu6 from '../assets/Background/Ubuntu6.png'

const ChangeBackground = () => {
const arr = [Ubuntu,Ubuntu1,Ubuntu2,Ubuntu3,Ubuntu4,Ubuntu5,Ubuntu6]
console.log(arr)
let val = Math.floor(Math.random()*6)
  return arr[val] 
}

export default ChangeBackground