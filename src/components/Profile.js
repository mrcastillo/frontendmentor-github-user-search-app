import avatar from "../images/icon-avatar.svg";

import location from "../images/icon-location.svg";
import website from "../images/icon-website.svg";
import twitter from "../images/icon-twitter.svg";
import company from "../images/icon-company.svg";

function Profile() {
  return (
    <div className={"app-profile-container"}>
        
        <div className={"app-profile-info"}>
            <div className={"app-profile-info-avatar"}>
                <img src={avatar} />
            </div>
            <div className={"app-profile-info-text"}>
                <h3>The Octocat</h3>
                <a>@octocat</a>
                <p>Joined 25 Jan 2011</p>
            </div>
        </div>

        <br />
        
        <div className={"app-profile-lorem-ipsum"}>
            <p>Lorem Ipsum dolo sit amet, consectetuer adipiscing elit.
            Donecodio. Quisque volutpat mattis eros.
            </p>
        </div>

        <br />

        <div className={"app-profile-stats-wrapper"}>
            <div className={"app-profile-stat"}>
                <p>Repos</p>
                <p>8</p>
            </div>

            <div className={"app-profile-stat app-profile-stat-mid"}>
                <p>Followers</p>
                <p>3938</p>
            </div>

            <div className={"app-profile-stat"}>
                <p>Following</p>
                <p>9</p>
            </div>
        </div>

        <br />
        <div className={"app-profile-social-wrapper"}>
            <div className={"app-profile-social"}>
                <div className={"app-profile-social-img"}>
                    <img src={location} />
                </div>
                <div className={"app-profile-social-text"}>
                    <p>San Francisco</p>
                </div>
            </div>

            <div className={"app-profile-social"}>
                <div className={"app-profile-social-img"}>
                    <img src={website} />
                </div>
                <div className={"app-profile-social-text"}>
                    <p>https:github.blog</p>
                </div>
            </div>

            <div className={"app-profile-social"}>
                <div className={"app-profile-social-img"}>
                    <img src={twitter} />
                </div>
                <div className={"app-profile-social-text"}>
                    <p>Not Available</p>
                </div>
            </div>

            <div className={"app-profile-social"}>
                <div className={"app-profile-social-img"}>
                    <img src={company} />
                </div>
                <div className={"app-profile-social-text"}>
                    <p>@github</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
