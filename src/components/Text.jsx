/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useState } from 'react';
import './style.css';
function Text() {
  const [show,setShow] = useState(false);
return (
<>
<p className="text-white text-4xl overflow-visible m-6 flex items-center justify-center pb-4 txt">
  Front-End Web Developer
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
  Hi! My Names is Adnan Sayed and I'm a Front-end Web developer.
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
  I'm ...
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
🎯 An enthusiastic fresher with highly motivated skills having bachelors of Science in Information Technology.
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
🎯 Eager to learn new technologies and methodologies.
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
🎯 Always willing to innovate the new things which can improve the existing technology.
</p>
<p className="text-white text-4xl overflow-visible m-6 flex items-center justify-center pb-4 txt ">
  Education / Certificates
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ Re:Coded & Flatiron School: ReactJs Bootcamp ---- 2021
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ Bachelor of science in Information Technology ---- 2017-2020
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ CCNA 4 R&S: Connecting Networks ---- 2019
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ CCNA 3 R&S: Scaling Networks ---- 2019
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ CCNA 2 R&S: Routing and Switching Essentials ---- 2018
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ CCNA 1 R&S: Introduction to Networks ---- 2018
</p>
<p className="text-white text-xl overflow-visible m-6 txt">
➥ IT Essentials: PC Hardware and Software ---- 2018
</p>

</>
)
}
export default Text;
