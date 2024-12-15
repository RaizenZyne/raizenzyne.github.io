import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/navigation.css";
import {
  faAddressCard,
  faBriefcase,
  faEnvelope,
  faHome,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function NavigationBar() {
  const [dark, setDark] = useState(true);
  const body = document.querySelector("body");

  function changeMode() {
    if (body) {
      if (dark) {
        setDark(false);
        body.classList.remove("dark-mode");
      } else {
        setDark(true);
        body.classList.add("dark-mode");
      }
    }
  }

  return (
    <nav id="navbar">
      <ul>
        <li>
          <a onClick={changeMode} title="Theme">
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </a>
        </li>
        <li>
          <a href="#exp" title="Experience">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
        <li>
          <a href="#main" title="Main">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href="#about" title="About">
            <FontAwesomeIcon icon={faAddressCard} />
          </a>
        </li>
        <li>
          <a href="#contact" title="Contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
