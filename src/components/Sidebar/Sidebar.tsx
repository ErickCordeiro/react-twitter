import { BellSimple, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react";
import twitterLogo from "../../assets/logo-twitter.svg";

import './sidebar.modules.css';

export function Sidebar(){
    return (
        <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href="/home">
            <House weight="fill" />
            Home
          </a>
          <a href="/explore">
            <Hash />
            Explore
          </a>
          <a href="/notifications">
            <BellSimple />
            Notifications
          </a>
          <a href="/messages">
            <Envelope />
            Messages
          </a>
          <a href="/bookmarks">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="/lists">
            <FileText />
            Lists
          </a>
          <a href="/profile">
            <User />
            Profile
          </a>
          <a href="/more">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet">Tweet</button>
      </aside>
    );
}