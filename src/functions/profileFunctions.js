import axios from "axios";

export const getProfile = async (dispatch, username) => {
    
    var userProfile = await axios(`https://api.github.com/users/${username}`);

    dispatch({
        type: "GET_PROFILE",
        userProfile
    });
};