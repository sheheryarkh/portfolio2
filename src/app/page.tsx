import Image from "next/image";
import logo from "@/app/pics/pic.jpeg";
import React from "react";
import image from "@/app/pics/image.png";
// import resume from "@/app/pics/resume.png";
import website from "@/app/pics/website.png";
import custom from "@/app/pics/custom.png";
import server from "@/app/pics/serv.png";

import html from "@/app/pics/hmlll.webp";
import css from "@/app/pics/pngwing.com (2).png";
import js from "@/app/pics/js.png";
import next from "@/app/pics/next.png";
import react from "@/app/pics/react.png";
import serverss from "@/app/pics/server.png";



export default function Home() {
  return (
    <div className="bg-gray-700">
      <main id="main" className="flex text-center bg-gray-700 justify-evenly font-bold text-white py-3 text-3xl max-sm:flex-col w-full justify-center text-center">
        <div id="h1" className="mt-6">
          <h1>
            Hello, this is <span className="text-orange-400 font-bold w-full">sheheryar khan</span>
          </h1>
          <h2>a Full Stack Dev</h2>
          <h2>Mern Stack dev</h2>
          <h2>FrontEnd Dev</h2>
          <h2>Backend Dev</h2>
          <h2>UI/UX designer</h2>
        </div>
        <div>
          <Image
            id="pic"
            src={logo}
            alt="logo"
            width={300}
            height={300}
            className="rounded-full pb-4  max-sm:flex mt-6 w-2/1 mx-auto"
          ></Image>
        </div>
      </main>
      <hr />
      <section id="about" >
        <div className="bg-gray-700 text-white">
          <h1 className="text-2xl font-bold text-center py-4">About Me</h1>
          <p id="abt" className="w-4/2 text-center">
            i am a Full Stack Developer with a passion for creating an innovatie
            and user-frindly web apps.i have been enrolled in syalani welfare
            trust pragram named <strong> "SMIT"</strong> for at last 6 months
            now and am also enrolled ithe Governer sindh's IT initiative program
            too.
          </p>
          <div className="text-center mt-4 pb-5 ">
          <a
            href="mailto:youremail.com?subject=Hire%20Me%20Inquiry&body=Hello%20Sheheryar%20khan,%0A%0AI%20would%20like%20to%20hire%20you%20for%20a%20project."
            className="hire-me-button text-orange-400 font-bold hover:text-orange-200"
          >
            Hire Me
          </a>
          <a className="resume  text-orange-400 font-bold ml-5 text-center hover:text-orange-200" href="https://resume-blond-eta.vercel.app/">
            My resume
          </a>
          </div>
        </div>
        
      </section>
      <h2 id="h2" className="mt-3 text-center text-white font-bold text-2xl mb-8 w-full bg-gray-700 ">Check out my projects</h2>
      <hr />
      <section id="projects" className="font-bold text-white flex flex-wrap w-full gap-7 justify-center mt-8 max-sm: gap-3 justify-center w-full">
      
        <div className="text-center ml-7 max-sm: ">
          <Image width={250}  src={image} alt="image"></Image>
          <a className="pt-6 hover:text-orange-400" href="https://resume-builder-eta-six.vercel.app/">
            Resume builder
          </a>
        </div>
        <hr />
        
        <hr />
        <div className="text-center">
          <Image width={250} src={website} alt="image"></Image>
          <a className="pt-6 hover:text-orange-400" href="https://webtailwind-ruddy.vercel.app/">Next App</a>
        </div>
        <hr />
        <div className="text-center flex flex-col gap-3  max-sm:mr-0">
          <Image width={240} src={custom} alt="image"></Image>
          <a className=" hover:text-orange-400" href="https://website-pi-sandy.vercel.app/">Next custom</a>
        </div>
        <hr />
        <div className="text-center ml-5">
          <Image width={250} src={server} alt="image"></Image>
          <a className="pt-6  hover:text-orange-400" href="https://github.com/sheheryarkh/mongoose">Crud on express</a>
        </div>
        <hr />
        
        <hr />
      </section>
      <hr />
   <section id="skills" className="text-center w-full flex flex-col justify-center text-white text-2xl font-bold max-sm:align-center text-center justify-center w-full mx-auto ">
    <h2 className="h-0 w-full">My skills are in</h2>
    <div className="flex justify-evenly  mt-8 pt-9 max-sm: flex-wrap justify-evenly max-sm:w-full flex justify-center text-center align-center pb-9 gap-6">
   <div className="mt-9"> <Image width={110} src={html} alt=""></Image></div>
   <div> <Image width={110} src={css} alt=""></Image></div>
    <Image width={110} src={js} alt=""></Image>
    <Image width={110} src={react} alt=""></Image>
    <Image width={110} src={serverss} alt=""></Image>
    <Image width={110} src={next} alt=""></Image>
  
    </div>
   </section>
   <hr />
   <section id="edu">
    <div className="text-center font-bold text-white list-none pb-9 pt-9">
   <h2 className="text-2xl">Education</h2>
   <h3><li>Hsc</li></h3>
   <h3><li>Fsc</li></h3>
   <h3><li>graduate</li></h3>
   <h3><li>M.A English</li></h3>
   </div>
   </section>
   <hr />
   
 
   
    </div>
  );
}
