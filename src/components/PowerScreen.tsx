import { CSSProperties } from "react";
// import stickman from "../assets/stickman.svg";
import ad from "../assets/icons/android.svg";
import ar from "../assets/icons/arduino.svg";
import bs from "../assets/icons/bootstrap.svg";
import cs from "../assets/icons/csharp.svg";
import css from "../assets/icons/css3.svg";
import ff from "../assets/icons/firefox.svg";
import git from "../assets/icons/git.svg";
import goo from "../assets/icons/google.svg";
import gql from "../assets/icons/graphql.svg";
import htm from "../assets/icons/html5.svg";
import jv from "../assets/icons/java.svg";
import js from "../assets/icons/javascript.svg";
import jq from "../assets/icons/jquery.svg";
import lr from "../assets/icons/laravel.svg";
import lx from "../assets/icons/linux.svg";
import sql from "../assets/icons/mysql.svg";
import ng from "../assets/icons/nginx.svg";
import nd from "../assets/icons/nodejs.svg";
import php from "../assets/icons/php.svg";
import pm from "../assets/icons/postman.svg";
import ps from "../assets/icons/powershell.svg";
import py from "../assets/icons/python.svg";
import rp from "../assets/icons/raspberrypi.svg";
import rc from "../assets/icons/react.svg";
import ts from "../assets/icons/typescript.svg";
import vb from "../assets/icons/visualbasic.svg";
import vt from "../assets/icons/vitejs.svg";
import vs from "../assets/icons/vscode.svg";
import wn from "../assets/icons/windows.svg";
import yii from "../assets/icons/yii.svg";

import "../css/power.css";

export function PowerScreen() {
  return (
    <div className="banner">
      {/* <img className="person" src={stickman} title="" /> */}
      <div className="slider" style={{ "--quantity": 30 } as CSSProperties}>
        <div className="item" style={{ "--position": 1 } as CSSProperties}>
          <img src={wn} title="Windows" />
        </div>
        <div className="item" style={{ "--position": 2 } as CSSProperties}>
          <img src={ad} title="Android" />
        </div>
        <div className="item" style={{ "--position": 3 } as CSSProperties}>
          <img src={goo} title="Google" />
        </div>
        <div className="item" style={{ "--position": 4 } as CSSProperties}>
          <img src={ff} title="Firefox" />
        </div>
        <div className="item" style={{ "--position": 5 } as CSSProperties}>
          <img src={htm} title="HTML" />
        </div>
        <div className="item" style={{ "--position": 6 } as CSSProperties}>
          <img src={css} title="CSS" />
        </div>
        <div className="item" style={{ "--position": 7 } as CSSProperties}>
          <img src={js} title="JavaScript" />
        </div>
        <div className="item" style={{ "--position": 8 } as CSSProperties}>
          <img src={php} title="PHP" />
        </div>
        <div className="item" style={{ "--position": 9 } as CSSProperties}>
          <img src={sql} title="MySQL" />
        </div>
        <div className="item" style={{ "--position": 10 } as CSSProperties}>
          <img src={lr} title="Laravel" />
        </div>
        <div className="item" style={{ "--position": 11 } as CSSProperties}>
          <img src={yii} title="Yii" />
        </div>
        <div className="item" style={{ "--position": 12 } as CSSProperties}>
          <img src={jq} title="JQuery" />
        </div>
        <div className="item" style={{ "--position": 13 } as CSSProperties}>
          <img src={ng} title="Nginx" />
        </div>
        <div className="item" style={{ "--position": 14 } as CSSProperties}>
          <img src={nd} title="NodeJS" />
        </div>
        <div className="item" style={{ "--position": 15 } as CSSProperties}>
          <img src={gql} title="GraphQL" />
        </div>
        <div className="item" style={{ "--position": 16 } as CSSProperties}>
          <img src={vt} title="Vite" />
        </div>
        <div className="item" style={{ "--position": 17 } as CSSProperties}>
          <img src={rc} title="React" />
        </div>
        <div className="item" style={{ "--position": 18 } as CSSProperties}>
          <img src={bs} title="Bootstrap" />
        </div>
        <div className="item" style={{ "--position": 19 } as CSSProperties}>
          <img src={ts} title="TypeScript" />
        </div>
        <div className="item" style={{ "--position": 20 } as CSSProperties}>
          <img src={ps} title="PowerShell" />
        </div>
        <div className="item" style={{ "--position": 21 } as CSSProperties}>
          <img src={git} title="Git" />
        </div>
        <div className="item" style={{ "--position": 22 } as CSSProperties}>
          <img src={vs} title="VS Code" />
        </div>
        <div className="item" style={{ "--position": 23 } as CSSProperties}>
          <img src={vb} title="Visual Basic" />
        </div>
        <div className="item" style={{ "--position": 24 } as CSSProperties}>
          <img src={cs} title="C#" />
        </div>
        <div className="item" style={{ "--position": 25 } as CSSProperties}>
          <img src={jv} title="Java" />
        </div>
        <div className="item" style={{ "--position": 26 } as CSSProperties}>
          <img src={py} title="Python" />
        </div>
        <div className="item" style={{ "--position": 27 } as CSSProperties}>
          <img src={rp} title="Raspberry Pi" />
        </div>
        <div className="item" style={{ "--position": 28 } as CSSProperties}>
          <img src={ar} title="Arduino" />
        </div>
        <div className="item" style={{ "--position": 29 } as CSSProperties}>
          <img src={pm} title="Postman" />
        </div>
        <div className="item" style={{ "--position": 30 } as CSSProperties}>
          <img src={lx} title="Linux" />
        </div>
      </div>
    </div>
  );
}
