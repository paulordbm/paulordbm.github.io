/*************************************************************************************************** 

Copyright (c) 2017 Paulo Renato de Barros Mendonça, licensed under the MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***************************************************************************************************/

// @flow
import React, { Component } from "react";
import Console from "react-console-component";
import moment from "moment";
import "./Terminal.css";

interface ConsoleState {
  count: number;
}

const COMMAND_LS = "ls";
const COMMAND_CAT = "cat";
const FILE_README = "greetings.txt";
const README_CONTENTS =
  "Hi! I'm Paulo. I like to describe myself as a pragmatic, \n" +
  "polyglot, generalist software engineer. I'm currently \n" +
  "engaged in a full-time job, but am always open to talk \n" +
  "about new opportunities. If you like my portfolio, drop \n" +
  "me a message below!\n\n" +
  "Thanks for the visit!\n";
const WELCOME_MESSAGE =
  "    __  __     ____         ______                __ \n" +
  "   / / / /__  / / /___     / ____/_  _____  _____/ /_\n" +
  "  / /_/ / _ \\/ / / __ \\   / / __/ / / / _ \\/ ___/ __/\n" +
  " / __  /  __/ / / /_/ /  / /_/ / /_/ /  __(__  ) /_  \n" +
  "/_/ /_/\\___/_/_/\\____/   \\____/\\____/\\___/____/\\__/  \n\n\n";

export default class Terminal extends Component<{}, ConsoleState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  child: { console?: Console } = {};

  handler = (text: string) => {
    if (this.child.console == null) return;

    const console = this.child.console;

    const input = text.trim().split(" ");

    if (text === "" || input.length === 0) {
      console.return();
      return;
    }

    const command = input[0];

    switch (command) {
      case COMMAND_LS:
        this.handleLs(input);
        break;
      case COMMAND_CAT:
        this.handleCat(input);
        break;
      default:
        this.handleUnrecognizedCommand(command);
        break;
    }
  };

  handleLs = (input: string[]) => {
    let result = "";
    if (input.length > 1 && input[1] !== FILE_README) {
      result = `ls: file not found: ${input[1]}`;
    } else {
      result = FILE_README;
    }

    this.logResult(result);
  };

  handleCat = (input: string[]) => {
    let result = "";

    if (input.length === 2 && input[1] === FILE_README) {
      result = README_CONTENTS;
    } else {
      result = `cat: illegal options '${input
        .slice(1, input.length - 1)
        .join(" ")}'\n usage: cat [file]`;
    }

    this.logResult(result);
  };

  handleUnrecognizedCommand = (command: string) => {
    this.logResult(`host: command not found: ${command}`);
  };

  logResult = (result: string) => {
    if (this.child && this.child.console) {
      const console = this.child.console;
      console.log(result);
      console.return();
    }
  };

  promptLabel = () => {
    return "guest@" + moment().format("HH:mm:ss") + " › ";
  };

  render() {
    return (
      <Console
        ref={ref => (this.child.console = ref)}
        handler={this.handler}
        promptLabel={this.promptLabel}
        welcomeMessage={WELCOME_MESSAGE}
        autofocus={true}
      />
    );
  }
}
