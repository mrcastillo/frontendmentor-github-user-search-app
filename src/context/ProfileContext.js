import React, { createContext, useReducer, useEffect } from "react";

import { profileReducer } from "../reducers/profileReducer";
import { getProfile } from "../functions/profileFunctions";


export const UserProfileContext = createContext();

const ProfileContextProvider = (props) => {
    const [profile, dispatch] = useReducer(profileReducer, {});

    //When the application loads, perform an axios request to GITHUB
    useEffect(()=> {
        getProfile(dispatch, "octocat");        
    }, []);


    return( 
        <UserProfileContext.Provider value={{profile, dispatch}}>
            { props.children }
        </UserProfileContext.Provider>
    )
};

export default ProfileContextProvider;