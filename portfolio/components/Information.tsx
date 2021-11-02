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
      <div className="grid grid-cols-1 mt-5 sm:text-xl md:text-xl text-white font-mono px-24">
        <p className="grid place-items-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-8 mt-5 px-24 content-center">
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
      </div>

      <div className="grid gap-4 grid-cols-3"></div>
    </div>
  );
}
