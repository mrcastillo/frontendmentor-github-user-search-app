import React, { createContext, useReducer, useEffect } from "react";

import { profileReducer } from "../reducers/profileReducer";
import { defaultProfile, getProfile } from "../functions/profileFunctions";


export const UserProfileContext = createContext();

const ProfileContextProvider = (props) => {
    const [profile, dispatch] = useReducer(profileReducer, {});

    //When the application loads, perform an axios request to GITHUB
    useEffect(() => {
        defaultProfile(dispatch);        
    }, []);


    return( 
        <UserProfileContext.Provider value={{profile, dispatch}}>
            { props.children }
        </UserProfileContext.Provider>
    )
};

export default ProfileContextProvider;