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
import React from "react";

export const ContactForm = (props: { action: string }) => {
  return (
    <form className="flex flex-col p-4" action={props.action} method="POST">
      <input
        className="block appearance-none w-full bg-bone-lightest text-bone-darker border border-steel-lightest hover:border-steel-light px-2 py-2 pr-2 mb-2 rounded shadow"
        name="email"
        placeholder="Your email"
        type="email"
      />
      <textarea
        className="block appearance-none w-full h-32 bg-bone-lightest text-bone-darker border border-steel-lightest hover:border-steel-light px-2 py-2 pr-2 mb-4 rounded shadow"
        name="message"
        placeholder="Your message"
      />
      <div className="flex items-center justify-between">
        <a
          class="inline-block align-baseline no-underline font-bold text-sm text-bone-dark hover:text-bone-darker"
          href="https://formspree.io/"
        >
          Powered by formspree.io
        </a>
        <button
          className="block appearance-none pin-y pin-r w-1/5 bg-steel hover:bg-steel-dark text-bone-lightest rounded shadow px-2 py-2"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};
