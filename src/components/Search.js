
import { useState, useContext } from "react";
import glass from "../images/icon-search.svg";

import { UserProfileContext } from "../context/ProfileContext";
import { getProfile } from "../functions/profileFunctions";

function Search() {

    const [ usernameInput, setUsernameInput ] = useState("");

    const { profile, dispatch } = useContext(UserProfileContext);

    const changeProfile = (e) => {
        e.preventDefault();
        console.log("I just got clicked!");

        getProfile(dispatch, usernameInput);
    };

    const handleInputText = (text) => {
        const userInput = text.target.value;
        setUsernameInput(userInput);
    }

    return (
    <div className={"app-search-container"}>
        <div className={"app-search"}>
            <form onSubmit={changeProfile}>
                <div className={"app-search-glass"}>
                    <img src={glass} />
                </div>
                <div className={"app-search-text"}>
                    <input value={usernameInput} onChange={handleInputText} placeholder={"Search Github username..."} type={"text"} id={"search"} name={"n-search"}></input>
                </div>

                <div className={"app-search-button"}>
                    <button type={"submit"}>Search</button>
                </div>
            </form>

        </div>
    </div>
    );
}

export default Search;
