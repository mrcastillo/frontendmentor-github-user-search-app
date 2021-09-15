export const profileReducer = (state, action) => {
    switch(action.type) {
        case "GET_PROFILE":
            const profile = action.userProfile.data;
            const newState = profile;
            return newState;
    }
}