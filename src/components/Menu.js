import { useState } from "react";

import moonIcon from "../images/icon-moon.svg";

function Menu() {
    const [theme, setTheme] = useState("DARK");
    const themeSelector = document.querySelector(".app-menu-theme-selector");
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");

    const toggleDarkMode = (state) => {
        document.documentElement.classList.toggle("dark-mode", state);
    }

    useDark.addEventListener("change", (event) => {
        toggleDarkMode(event.matches);
    })
    return (
        <div className={"app-menu-container"}>
            <div className={"app-menu"}>
                <div className={"app-menu-brand"}>
                    <h1>devfinder</h1>
                </div>
                <div onClick={""} className={"app-menu-theme-selector"}>
                    <p>{theme}</p>
                    <div className={"app-menu-selector"}>
                        <img src={moonIcon} />
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Menu;
  