// import stickman from "../assets/stickman.svg";
import { useEffect } from "react";
import ad from "../assets/icons/android.svg";
import bs from "../assets/icons/bootstrap.svg";
import cs from "../assets/icons/csharp.svg";
import css from "../assets/icons/css3.svg";
import ff from "../assets/icons/firefox.svg";
import git from "../assets/icons/git.svg";
import goo from "../assets/icons/google.svg";
import htm from "../assets/icons/html5.svg";
import jv from "../assets/icons/java.svg";
import js from "../assets/icons/javascript.svg";
import lr from "../assets/icons/laravel.svg";
import lx from "../assets/icons/linux.svg";
import sql from "../assets/icons/mysql.svg";
import ng from "../assets/icons/nginx.svg";
import nd from "../assets/icons/nodejs.svg";
import npm from "../assets/icons/npm.svg";
import php from "../assets/icons/php.svg";
import pm from "../assets/icons/postman.svg";
import py from "../assets/icons/python.svg";
import rc from "../assets/icons/react.svg";
import ts from "../assets/icons/typescript.svg";
import vb from "../assets/icons/visualbasic.svg";
import vs from "../assets/icons/vscode.svg";
import wn from "../assets/icons/windows.svg";

import "../css/power.css";

const typeTexts = function typeTexts(target: Element, texts: string) {
  let currentLine = 0,
    currentChar = 0;

  target.innerHTML = "";

  const next = () => {
    if (currentLine >= texts.length) {
      currentLine = 0;
    }

    const lineChars = texts[currentLine].split("");

    const type = () => {
      target.innerHTML += lineChars[currentChar++];
      if (currentChar >= lineChars.length) {
        currentLine++;

        const deleteLine = () => {
          target.innerHTML = target.innerHTML.substring(0, currentChar - 1);
          currentChar--;

          if (currentChar === 0) {
            return next();
          } else {
            requestAnimationFrame(() => {
              setTimeout(deleteLine, 1000);
            });
          }
        };

        requestAnimationFrame(() => {
          setTimeout(deleteLine, 1000);
        });
        // setTimeout(deleteLine, 2000);
        return;
      } else {
        requestAnimationFrame(() => {
          setTimeout(type, 1000);
        });
      }
    };

    requestAnimationFrame(() => {
      type();
    });
  };

  next();
};

export function PowerAnimation() {
  useEffect(() => {
    const typingElements = document.querySelectorAll("[data-type]");

    for (let x = typingElements.length - 1; x >= 0; x--) {
      const texts = typingElements[x].getAttribute("data-type");
      if (texts) {
        typeTexts(typingElements[x], JSON.parse(texts));
      }
    }
  });

  return (
    <>
      <div
        className="banner"
        style={{ "--quantity": 24 } as React.CSSProperties}
      >
        {" "}
        <div className="slider group3">
          <div
            className="item"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img src={rc} alt="React" />
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src={nd} alt="NodeJS" />
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src={sql} alt="MySQL" />
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src={lr} alt="Laravel" />
          </div>
          <div
            className="item"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src={bs} alt="Bootstrap" />
          </div>
          <div
            className="item"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img src={ff} alt="Firefox" />
          </div>
          <div
            className="item"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src={git} alt="Git" />
          </div>
          <div
            className="item"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <img src={ts} alt="Typescript" />
          </div>
        </div>
        <div className="slider group2">
          <div
            className="item"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img src={wn} alt="Windows" />
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src={lx} alt="Linux" />
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src={ad} alt="Android" />
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src={vs} alt="Visual Studio Code" />
          </div>
          <div
            className="item"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src={npm} alt="Node Package Manager" />
          </div>
          <div
            className="item"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img src={ng} alt="Nginx" />
          </div>
          <div
            className="item"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src={pm} alt="Postman" />
          </div>
          <div
            className="item"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <img src={goo} alt="Google" />
          </div>
        </div>
        <div className="slider group1">
          <div
            className="item"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img src={js} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src={css} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src={htm} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src={php} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src={vb} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img src={cs} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src={jv} alt="" />
          </div>
          <div
            className="item"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <img src={py} alt="" />
          </div>
        </div>
        <div className="blur">
          <h1 className="text-left" data-type='["Programmer"]'></h1>
          <h1 className="text-right" data-type='["Developer"]'></h1>
        </div>
      </div>
      {/* <div className="">
        <img
          src={stickman}
          className="person animation-scroll"
          alt="Stickman"
        />
      </div> */}
    </>
  );
}
