import React from "react";
import ReactTerminal from "react-console-emulator";

export default function Terminal() {
  const emoji = `
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n
  @@@@@@@@@@@@@@@@...................@@@@@@@@@@@@@@@\n
  @@@@@@@@@@@@...........................@@@@@@@@@@@\n
  @@@@@@@@@.................................@@@@@@@@\n
  @@@@@@...........@@@@..........@@@@..........@@@@@\n
  @@@@@............@@@@@........@@@@@...........@@@@\n
  @@@.............@@@@@@........@@@@@.............@@\n
  @@...............@@@@@........@@@@@..............@\n
  @@...............@@@@..........@@@@..............@\n
  @..................@............@.................\n
  @.................................................\n
  @.......@.................................@@......\n
  @@......@@................................@......@\n
  @@,,,,,,,@@,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@,,,,,,,@\n
  @@@,,,,,,,,@,,,,,,,,,,,,,,,,,,,,,,,,,,,@@,,,,,,,@@\n
  @@@@@,,,,,,,,@@,,,,,,,,,,,,,,,,,,,,,,@@,,,,,,,@@@@\n
  @@@@@@,,,,,,,,,,@@,,,,,,,,,,,,,,,@@@,,,,,,,,,@@@@@\n
  @@@@@@@@@,,,,,,,,,,,,,@@@@@@@(,,,,,,,,,,,,@@@@@@@@\n
  @@@@@@@@@@@@,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@\n
  @@@@@@@@@@@@@@@@,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@\n
  `;
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <given string>",
      fn: function () {
        return `${Array.from(arguments).join(" ")}`;
      },
    },
    shourya: {
      description: "Know about Shourya",
      usage: "",
      fn: () => {
        return (
          emoji +
          "\nHi!  I am shourya raj!\n Do you want to have a chat? \n Please contact me on my email: shouryaraj543@gmail.com"
        );
      },
    },
    contact: {
      description: "Talk to your mate: shourya",
      usage: "",
      fn: () =>
        "email: shouryaraj543@gmail.com" +
        "\n" +
        "LinkedIn: https://www.linkedin.com/in/shouryarajau/",
    },
  };
  const promptLabelStyle = {
    paddingTop: "3px",
    color: "#41f200",
  };
  // styling resource: https://github.com/linuswillner/react-console-emulator/blob/master/docs/CONFIG.md
  // https://github.com/linuswillner/react-console-emulator/blob/master/src/defs/styles/Terminal.js
  return (
    <div className="container max-w-4xl content-center mx-auto px-10">
      <ReactTerminal
        promptLabelStyle={promptLabelStyle}
        commands={commands}
        welcomeMessage={
          "Welcome to Developer's world! 💻\n Available Commands: help, echo, shourya, clear, contact"
        }
        promptLabel={"me@Shourya:~$"}
      />
    </div>
  );
}
