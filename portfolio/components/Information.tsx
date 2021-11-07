import React, { useState } from "react";
import profilepic from "../images/profilepic.jpg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Information() {
  return (
    <div className="container max-w-4xl content-center mx-auto">
      <div className="grid grid-cols-1">
        <img
          className="w-32 h-32 md:w-52 md:h-52 rounded-full mx-auto"
          src={profilepic.src}
          alt=""
          width="600"
          height="800"
        />
      </div>
      <div className="grid grid-cols-1 mt-5">
        <p className="grid place-items-center sm:text-2xl md:text-5xl text-white font-mono">
          Hi, I’m Shourya Raj
        </p>
      </div>
      <div className="grid grid-cols-1 mt-5 sm:text-l md:text-xl text-white font-mono px-24">
        <p className="place-items-center">
          A Software Engineering student at{" "}
          <a
            href="https://www.monash.edu/"
            className="sm:text-xl md:text-2xl text-blue-300"
          >
            Monash University
          </a>{" "}
          and Software Engineer at{" "}
          <a
            href="https://loke.global/"
            className="sm:text-xl md:text-2xl text-blue-300"
          >
            {" "}
            LOKE
          </a>
          .
          <br />
          <br />
          I love tinkering around with technology. Passionate about Artificial
          intelligence, Algorithm Research and Cloud Engineering.
          <br />
          I am currently working on solving the problem of AI bias and learning
          GoLang programming.
          <br />
          <br />
          Apart from Binary world, I do enjoy capturing moments through Cannon
          M50 lens.
          <a
            href="https://www.instagram.com/gavityphotos/"
            className="text-green-300"
          >
            {" "}
            My photography page!
          </a>
          📷
          <br />
          To keep my mind fresh and pumped with endorphins, I tie up my NIKE
          shoe and go for long run. Probably, you can find me nearest marathon
          event. :)
          <br />
        </p>
        <br />
        <p className="grid place-items-center">
          Stalk me on
          <a
            href="https://www.linkedin.com/in/shouryarajau/"
            className="text-blue-300 underline "
          >
            LinkedIn{" "}
          </a>
          <a
            href="https://github.com/shouryaraj"
            className="text-blue-300 underline "
          >
            {" "}
            GitHub{" "}
          </a>
        </p>
        <br />
        <br />
        <p className="grid place-items-center"> ❤️</p>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-8 mt-5 px-24 content-center">
        <div className="md:col-start-4">
          <img
            className="w-10 h-10 rounded-full mx-auto "
            src={linkedin.src}
            alt=""
            width="100"
            height="100"
          />
        </div>
        <div className="md:col-start-5">
          <img
            className="w-10 h-10 rounded-full mx-auto"
            src={github.src}
            alt=""
            width="100"
            height="100"
          />
        </div>
      </div> */}
    </div>
  );
}
