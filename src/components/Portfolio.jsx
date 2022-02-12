/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";
import './style.css';
import Text from "./Text";
import Projects from "./Projects";
import Skills from './Skills';
import Contact from './Contact';
function portfolio() {
  const [showAbout,setShowAbout] = useState(true);
  const [showProjects,setShowProjects] = useState(false);
  const [showEducation,setShowEducation] = useState(false);
  const [showContact,setShowContact]= useState(false);
return (

<div id="all" className="w-screen h-screen overflow-hidden">
<div className="w-screen h-screen  flex flex-col overflow-hidden">
  <div className="flex h-40 w-full flex ">
  <div className="space w-1/6 "> </div>
<div className="header w-4/6 h-16   mt-4">
<Fade right>
<div className="w-1/2 h-full  float-right flex items-center space-x-9">
   <div className="flex w-1/5 h-full  flex justify-center items-center text-white text-xl border-b-2 hover:border-pink-700 font-semibold"onClick={()=>{
     setShowProjects(false);
     setShowContact(false);
     setShowAbout(true);
     setShowEducation(false);
   }} >About</div>
   <div className="flex w-1/5 h-full  flex justify-center items-center text-white text-xl border-b-2 hover:border-pink-700 font-semibold"onClick={()=>{
     setShowProjects(true);
     setShowAbout(false);
     setShowEducation(false);
     setShowContact(false);
   }}>Projects</div>
   <div className="flex w-1/5 h-full  flex justify-center items-center text-white text-xl border-b-2 hover:border-pink-700 font-semibold" onClick={()=>{
     setShowProjects(false);
     setShowAbout(false);
     setShowEducation(true);
     setShowContact(false);
   }}>Skills</div>

  <div className="flex w-1/5 h-full  flex items-center justify-center text-pink-700 text-xl border-b-2 hover:border-pink-700 font-semibold" onClick={()=>{
     setShowProjects(false);
     setShowAbout(false);
     setShowEducation(false);
     setShowContact(true);
   }} >Contact</div>
</div></Fade>
<Fade bottom>
<div className="w-2/3 h-24  text-black text-3xl flex items-center overflow-hidden fixed rounded-3xl justify-center space-x-10 footer blurs ">
<div>
<a href="https://github.com/Adnan-961/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" className="w-20 img border rounded-2xl"/></a>
</div>
<div>
    <a href="https://www.linkedin.com/in/adnan-el-sayed-711ab11b1/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className="w-20 img border rounded-2xl "/></a>
    </div>
    <div>
    <a href="mailto:adnan.sayed.official@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/4392/4392923.png" alt="" className="w-20 img rounded-2xl border"/></a></div>
</div></Fade>

<Fade left><div className="flex h-1/2 w-2/5 text-white text-3xl items-end mt-5  mb-2 title"><h1>Adnan Sayed</h1></div>

<div className="flex h-1/2 w-1/2 text-white text-xs items-start job"><h1>Web-Developer | IT Technician</h1> </div> </Fade>
{/*start */}

{
     showProjects && <Zoom ><Projects/></Zoom>
   }
{showAbout&& <Zoom><div className="w-full text-container float-left mt-20 overflow-x-hidden  border-2 border-transparent rounded-3xl section blurs hover:border-pink-900 border">
  
  <Text/>
</div> </Zoom>
}
{
  showEducation && <Skills/>
}
{showContact&& <Contact/>}


{/*end */}
</div>


</div>



</div>

</div>

    
   
)


}
export default portfolio;
