import { useState } from "react";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
  //Add DarkTheme or LightTheme class 
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const html = document.querySelector("html");

  html.setAttribute("class", `${theme ? "dark-theme" : "light-theme"}`);

  return (
    <div className={`app-container`}>

      <Menu />
      <br/>
      <br/>
      <Search />
      <br/>
      <Profile />

    </div>
  );
}

export default App;
