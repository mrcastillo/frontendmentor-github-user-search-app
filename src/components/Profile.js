import React, { useContext } from "react";

import { UserProfileContext } from "../context/ProfileContext";

import location from "../images/icon-location.svg";
import website from "../images/icon-website.svg";
import twitter from "../images/icon-twitter.svg";
import company from "../images/icon-company.svg";

function Profile() {
    
    const { profile , dispatch } = useContext(UserProfileContext);

    const createdAtDate = new Date(profile.created_at);
    const updatedAtDate = new Date(profile.updated_at)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        <div className={"app-profile-container"}>
            
            <div className={"app-profile-wrapper"}>
                <div className={"app-profile-info-avatar-lg"}>
                        <img src={profile.avatar_url} />
                </div>

                <div className={"app-profile-info-lg"}>
                    <div className={"app-profile-info"}>
                        <div className={"app-profile-info-avatar"}>
                            <img src={profile.avatar_url} />
                        </div>
                        <div className={"app-profile-info-text"}>
                            <h3 id={"name"}>{profile.name}</h3>
                            <a id={"login"}>@{profile.login}</a>
                            <p id={"joined"}>Joined {createdAtDate.getDate()} {months[createdAtDate.getMonth()]} {createdAtDate.getFullYear()}</p>
                            
                        </div>
                    </div>

                    <br />
                    <br />
                    <div className={"app-profile-lorem-ipsum"}>
                        <p>{profile.name ? profile.name:"This"} is a Github User with the login name <span id={"highlight"}>{profile.login}</span>. The user has created <span id={"highlight"}>{profile.public_repos}</span> public repos, and has <span id={"highlight"}>{profile.followers}</span> profile followers.
                        Their last update was at <span id={"highlight"}>{months[updatedAtDate.getMonth()]}, {updatedAtDate.getDate()}  {updatedAtDate.getFullYear()} at {updatedAtDate.getHours()}:{updatedAtDate.getMinutes()}</span> military time.
                        </p>
                    </div>

                    <br />
                    <br />
                    <div className={"app-profile-stats-wrapper"}>
                        <div className={"app-profile-stat"}>
                            <p>Repos</p>
                            <p>{profile.public_repos}</p>
                        </div>

                        <div className={"app-profile-stat app-profile-stat-mid"}>
                            <p>Followers</p>
                            <p>{profile.followers}</p>
                        </div>

                        <div className={"app-profile-stat"}>
                            <p>Following</p>
                            <p>{profile.following}</p>
                        </div>
                    </div>

                    <br />
                    <div className={"app-profile-social-wrapper"}>
                        <div id={"profile-location-wrapper"} className={`app-profile-social ${profile.location ? "" : "app-profile-social-not-available"}`}>
                            <div className={"app-profile-social-img"}>
                                <img src={location} />
                            </div>
                            <div className={"app-profile-social-text"}>
                                <p>{profile.location ? profile.location : "Not Available"}</p>
                            </div>
                        </div>

                        <div id={"profile-blog-wrapper"} className={`app-profile-social ${profile.blog ? "" : "app-profile-social-not-available"}`}>
                            <div className={"app-profile-social-img"}>
                                <img src={website} />
                            </div>
                            <div className={"app-profile-social-text"}>
                                <p>{profile.blog ? profile.blog : "Not Available"}</p>
                            </div>
                        </div>

                        <div id={"profile-twitter-wrapper"} className={`app-profile-social ${profile.twitter_username ? "" : "app-profile-social-not-available"}`}>
                            <div className={"app-profile-social-img"}>
                                <img src={twitter} />
                            </div>
                            <div className={"app-profile-social-text"}>
                                <p>{profile.twitter_username ? profile.twitter_username : "Not Available"}</p>
                            </div>
                        </div>

                        <div id={"profile-company-wrapper"} className={`app-profile-social ${profile.company ? "" : "app-profile-social-not-available"}`}>
                            <div className={"app-profile-social-img"}>
                                <img src={company} />
                            </div>
                            <div className={"app-profile-social-text"}>
                                <p>{profile.company ? profile.company : "Not Available"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;
