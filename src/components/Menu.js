import { useState } from "react";

import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

function Menu() {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const html = document.querySelector("html");

    const themeButton = (e) => {
        e.preventDefault();
        
        var currentClass = html.className;

        if(currentClass === "dark-theme") {
            html.className = "light-theme"
            setTheme(false)
        } else {
            html.className = "dark-theme"
            setTheme(true)
        }
        return;
    };

    return (
        <div className={"app-menu-container"}>
            <div className={"app-menu"}>
                <div className={"app-menu-brand"}>
                    <h1>devfinder</h1>
                </div>
                <div onClick={themeButton} className={"app-menu-theme-selector"}>
                    <p>{theme ? "LIGHT": "DARK"}</p>
                    <div className={"app-menu-selector"}>
                        <img src={theme ? sunIcon : moonIcon} />
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Menu;
  