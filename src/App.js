import { useState } from "react";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Profile from "./components/Profile";

import ProfileContextProvider from "./context/ProfileContext";

function App() {
  //Add DarkTheme or LightTheme class 
  const theme = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const html = document.querySelector("html");

  html.setAttribute("class", `${theme ? "dark-theme" : "light-theme"}`);

  return (
    <ProfileContextProvider>
      <div className={`app-container`}>
          <Menu />
          <br/>
          <br/>
          <Search />
          <br/>
          
          <Profile />
          
      </div>
    </ProfileContextProvider>
  );
}

export default App;
