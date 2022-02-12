/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Zoom from 'react-reveal/Zoom';
function Contact() {
return(
<Zoom>
<div className="w-full h-80  ml-8 text-container contact flex justify-around flex-wrap float-left text-white project flex-wrap pl-2 pt-2 mt-20 overflow-x-auto  border-2 border-transparent rounded-3xl section blurs ">
  
   <div className=" flex flex-col  w-60 h-64  rounded-3xl border-2 m-2 bg-green-600">
       <div className="flex w-full h-1/4  overflow-show justify-center items-center "> <img src="https://cdn-icons-png.flaticon.com/128/1377/1377218.png" alt="" className="mb-10 w-14 h-18"/></div>
       <div className="w-full flex h-1/3 justify-center items-center text-4xl">Let`s Chat..</div>
       <div className="w-full h-2/5 flex justify-center items-center rounded-b-3xl">
           <a className="w-3/4 h-2/4 rounded-xl flex justify-center items-center bg-white text-black border-2 hover:border-green-800" target="_blank" href="https://api.whatsapp.com/send/?phone=96178996755"><div className="w-3/4 h-2/4 rounded-xl flex justify-center items-center bg-white text-black">Whatsapp Me !</div></a>
       </div>
   </div>
   <div className=" flex flex-col  w-60 h-64  rounded-3xl border-2 m-2 bg-red-400">
       <div className="flex w-full h-1/4  overflow-show justify-center items-center "> <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" className="mb-12 w-14 h-18"/></div>
       <div className="w-full flex h-1/3 justify-center items-center text-4xl">Email Me..</div>
       <div className="w-full h-2/5 flex justify-center items-center rounded-b-3xl">
           <a className="w-11/12 h-2/4 rounded-xl flex justify-center items-center bg-white text-black border-2 hover:border-red-800 text-xs font-bold " target="_blank" href="mailto:adnan.sayed.official@gmail.com">Adnan.sayed.official@gmail.com
               <div className="w-2/4 h-2/4 rounded-xl  flex justify-center items-center bg-white text-black"></div></a>
       </div>
   </div>
   <div className=" flex flex-col  w-60 h-64  rounded-3xl border-2 m-2 bg-blue-600">
       <div className="flex w-full h-1/4  overflow-show justify-center items-center "> <img src="https://cdn-icons-png.flaticon.com/128/1795/1795897.png" alt="" className="bg-white rounded-2xl border-2 border-black mb-10 w-14 h-18"/></div>
       <div className="w-full flex h-1/3 justify-center items-center text-4xl">Call Me..</div>
       <div className="w-full h-2/5 flex justify-center items-center rounded-b-3xl">
<div className="w-2/4 h-2/4 rounded-xl  flex justify-center items-center bg-white text-black font-semibold">+961-78996755</div>
       </div>
   </div>
   
  
        
    </div>
</Zoom>
);
}
export default Contact;