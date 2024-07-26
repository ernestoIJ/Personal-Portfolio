'use client';

import "./page.css"
import Image from 'next/image'
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"

import { useState, useEffect} from "react";

export default function Home() {

   const jobTitles = ["Full Stack Developer", "Software Engineer", "Machine Learning Engineer", "Research Engineer", "Backend Engineer"];
   
   const [currentTitle, setCurrentTitle] = useState("");
   const [isDeleting, setIsDeleting] = useState(false);
   const [typingSpeed, setTypingSpeed] = useState(150);
   const [titleIndex, setTitleIndex] = useState(0);
   const typingDelay = 200; // Speed of typing
   const erasingDelay = 50; // Speed of erasing
   const newTextDelay = 2000; // Delay between current and new text

  useEffect(() => {

      // Typing Animation
      let typingTimer;

      const handleTyping = () => {
         setCurrentTitle(jobTitles[titleIndex].substring(0, currentTitle.length + 1));
         setTypingSpeed(typingDelay);
      };

      const handleDeleting = () => {
         setCurrentTitle(currentTitle.substring(0, currentTitle.length - 1));
         setTypingSpeed(erasingDelay);
      };

      if (isDeleting) {
         typingTimer = setTimeout(handleDeleting, typingSpeed);
      } else {
         typingTimer = setTimeout(handleTyping, typingSpeed);
      }

      if (!isDeleting && currentTitle === jobTitles[titleIndex]) {
         setIsDeleting(true);
         setTypingSpeed(newTextDelay);
      } else if (isDeleting && currentTitle === "") {
         setIsDeleting(false);
         setTitleIndex(titleIndex + 1 >= jobTitles.length ? 0 : titleIndex + 1);
         setTypingSpeed(typingDelay);
      }

      return () => clearTimeout(typingTimer);
   }, [currentTitle, isDeleting, titleIndex]);

   return (
    <div id="home-page">
      <section className="banner-container section-container" id="home">
         <div className="section__pic-container">
            <Image priority src="/linkedIn_profile.png" alt="profile picture" width={300} height={300}/>
         </div>
         <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Ernesto Ibanez Jr</h1>
            <p className="section__text__p2 typing">A {currentTitle}</p>
            <div className="btn-container">
               <div className="socials-container social-icon">
                <a href="https://www.linkedin.com/in/ernestoibanezjr"><img src="/linkedin-fill.svg" alt="LinkedIn" className="icon"/></a>
                <a href="https://github.com/ernestoIJ"><img src="/github-line.svg" alt="Github" className="icon"/></a>
              </div>
            </div>
         </div>
       </section>

       <div className="academic-container">
        <div className="text-container">
          <h2 className="section-title">Academics</h2>
          <p>
          I am an enthusiastic computer science student at Arizona State University. Having recently completed my associate degree at Glendale Community College with a focus in Computer Science and a perfect 4.0 GPA, my passion centers around using technology to address real-world issues and generate a positive, global impact. My journey is marked by a constant pursuit of personal growth, a willingness to face challenges head-on, and a commitment to making informed, quality decisions. I am always searching for ways to foster innovation and contribute meaningfully to society. My adventure in software engineering has been exhilarating, filled with the joys of coding and solving intricate problems.
        </p>
        </div>
        <div className="logo-container">
          <img className="gcc" src="/gcclogo.png" alt="gcc logo"/>
          <ArrowNarrowRightIcon className="arrow"/>
          <img className="asu" src="/asu.png" alt="asu logo"/>
        </div>
       </div>


       <div className="about-container">
        <div className="text-container">
          <h2 className="section-title">About Me</h2>
          <p>
          Apart from my academic and professional pursuits, I enjoy spending my free time doing different things that make me feel relaxed. I love playing and hanging out with my dog, I also enjoy playing video games, such as Fortnite, FIFA, Spider-Man: Miles Morales, and Minecraft. Soccer holds a special place in my heart as well. Having played it earlier in my life, the sport instilled in me a sense of teamwork, discipline, and the thrill of competition. It's a sport that continues to capture my interest both as a player and a fan.
        </p>
        </div>
        <div className="logo-container">
          <img className="me-arch" src="/me_and_arch.png" alt="me and my dog Archie"/>
        </div>
       </div>
      </div>
   );
}
