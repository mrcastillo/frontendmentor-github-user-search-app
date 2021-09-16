import axios from "axios";

import octocatDefaultAvatar from "../images/icon-avatar.svg";

const octocat = {
    login: "octocat",
    id: 583231,
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    avatar_url: octocatDefaultAvatar,
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url: "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 4004,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2021-08-23T14:28:41Z",
    error: false
}

export const defaultProfile = async (dispatch) => {
    dispatch({
        type: "DEFAULT_PROFILE",
        octocat
    });
};

export const getProfile = async (dispatch, username) => {
    try {
        var userProfile = await axios(`https://api.github.com/users/${username}`);

        dispatch({
            type: "GET_PROFILE",
            userProfile
        });
    } catch (error) {

        dispatch({
            type: "NO_PROFILE"
        })
    }
};