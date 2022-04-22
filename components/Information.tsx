import React from "react";

export default function Information() {
  return (
    <div className="container max-w-4xl content-center mx-auto">
      <div className="grid grid-cols-1">
        <img
          className="w-32 h-32 md:w-64 md:h-64 rounded-full mx-auto"
          src="https://raw.githubusercontent.com/shouryaraj/shouryaraj-portfolio/master/images/profilepic.JPG"
          alt="Image of the person"
          width="600"
          height="800"
        />
      </div>
      <div className="grid grid-cols-1 mt-5">
        <p className="grid place-items-center text-xl sm:text-2xl md:text-5xl text-white font-mono">
          Hi, I’m Shourya Raj
        </p>
      </div>
      <div className="grid grid-cols-1 mt-5 text-sm sm:text-l md:text-xl text-white font-mono px-8 sm:px-24">
        <p className="place-items-center">
          A Graduate Software Engineer at&nbsp;
          <a
            href="https://www.shippit.com/"
            target="_blank"
            className=" text-l sm:text-xl md:text-2xl text-blue-300"
          >
            Shippit
          </a>
          .
          <br />
          <br />
          I love tinkering around with technology. Passionate about Artificial
          intelligence, Algorithm Research and Cloud Engineering.
          <br />
          I am currently learning and enjoying the digital era of Supply Chain
          and its integration with Software and Data.
          <br />
          <br />
          Apart from Binary world, I do enjoy capturing moments through Cannon
          lens.&nbsp;
          <a
            href="https://www.instagram.com/gavityphotos/"
            target="_blank"
            className="text-green-300"
          >
            My photography page! 📷
          </a>
          <br />
          To keep my mind fresh and pumped with endorphins, I tie up my NIKE
          shoe and go for long runs.
          <br />
        </p>
      </div>
    </div>
  );
}
