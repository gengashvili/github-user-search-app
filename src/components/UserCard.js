import React from "react";
import format from "date-fns/format";
import StyledUserCard from "./StyledUserCard";

import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import companyIcon from "../assets/icon-company.svg";

import locationIconDark from "../assets/icon-location-dark.svg";
import twitterIconDark from "../assets/icon-twitter-dark.svg";
import websiteIconDark from "../assets/icon-website-dark.svg";
import companyIconDark from "../assets/icon-company-dark.svg";

function UserCard({ user, darkMode }) {
  return (
    <StyledUserCard darkMode={darkMode}>
      <img className="avatar" src={user.avatar_url} alt="" />

      <section className="user_container">
        <article className="header_of_user_info">
          <div className="names_wraper">
            <div>
              <h3>{user.name}</h3>
              <p>@{user.login}</p>
            </div>
            <p className="user_join_data">
              Joined {format(new Date(user.created_at), " d MMM Y")}
            </p>
          </div>
        </article>

        <section className="user_main_info_container">
          <article>{user.bio ? user.bio : "This profile has no bio"}</article>

          <article>
            <div>
              <h4>Repos</h4>
              <p>{user.public_repos}</p>
            </div>

            <div>
              <h4>Followers</h4>
              <p>{user.followers}</p>
            </div>

            <div>
              <h4>Following</h4>
              <p>{user.following}</p>
            </div>
          </article>

          <article>
            <div className={user.location ? "" : "not_available"}>
              <img src={darkMode ? locationIconDark : locationIcon} alt="" />
              {user.location ? <p>{user.location}</p> : <p>Not Available</p>}
            </div>

            <div className={user.twitter_username ? "" : "not_available"}>
              <img src={darkMode ? twitterIconDark : twitterIcon} alt="" />
              {user.twitter_username ? (
                <p>{user.twitter_username}</p>
              ) : (
                <p>Not Available</p>
              )}
            </div>

            <div className={user.blog ? "" : "not_available"}>
              <img src={darkMode ? websiteIconDark : websiteIcon} alt="" />
              {user.blog ? (
                <a href={user.blog}>https://github.blog</a>
              ) : (
                <p>Not Available</p>
              )}
            </div>

            <div>
              <img src={darkMode ? companyIconDark : companyIcon} alt="" />
              <a href={user.html_url}>@github</a>
            </div>
          </article>
        </section>
      </section>
    </StyledUserCard>
  );
}
export default UserCard;
