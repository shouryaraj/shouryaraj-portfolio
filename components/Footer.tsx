import React from "react";

export default function Footer() {
  return (
    <div className="container max-w-4xl content-center mx-auto">
      <div className="grid grid-cols-1 mt-5 text-sm sm:text-l text-white font-mono px-8 sm:px-24">
        <p className="grid place-items-center">
          Stalk me on
          <a
            href="https://www.linkedin.com/in/shouryarajau/"
            target="_blank"
            className="text-blue-300 underline "
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shouryaraj"
            target="_blank"
            className="text-blue-300 underline "
          >
            GitHub
          </a>
        </p>
        <br />
        <br />
        <p className="grid place-items-center text-xs sm:text-sm mb-2">
          Developed using NextJs, TypeScript, Tailwind and ❤️
        </p>
      </div>
    </div>
  );
}
