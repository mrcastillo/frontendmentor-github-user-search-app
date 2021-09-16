export const profileReducer = (state, action) => {
    switch(action.type) {
        case "GET_PROFILE":
            const profile = action.userProfile.data;
            const newState = {...profile, state, error: false};
            return newState;
            break;

        case "DEFAULT_PROFILE":
            console.log(state, "Defualt profile")
            const defaultProfile = action.octocat;
            return defaultProfile;
            break;

        case "NO_PROFILE":
            return { ...state, error: true};
            break;
    }
}