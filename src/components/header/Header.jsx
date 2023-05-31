import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "../../assets/icons/Ivan.png";
import { navMenus } from "../../utils/constants";
import { Bell, SmallAeroDown } from "../../utils/widgets/icons";



// nav menu list

const menuList = (id,label,icon,accessibility,link) => {
  return (
    <li className="flex items-center">
      <span className="mr-[6px]">{icon}</span>
      <NavLink to={link} aria-label={accessibility}>{label}</NavLink>
    </li>
  );
};

// main header component

const Header = () => {
  return (
    <header>
      <nav className="navbar flex items-center justify-between pt-[33px] pb-[38px] px-[50px]">
        <div>
          <div className="flex items-center">
            <NavLink to="/" aria-label="website logo" className="logo-title text-base">
              Educator
            </NavLink>
            <span className="ml-1">
              <SmallAeroDown />
            </span>
          </div>
          <p className="sub-title-logo">Arthshala</p>
        </div>

        <div className="menu-link">
          <ul className="flex items-center gap-[60px]">
            {navMenus.map(({id,label,icon,accessibility,link})=>menuList(id,label,icon,accessibility,link))}
          </ul>
        </div>

        <div className="menu-tools">
          <ul className="flex items-center">
            <li className="mr-[24px]">
              <span className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.739 2C17.109 2 21.477 6.368 21.477 11.738C21.477 14.2715 20.5047 16.5823 18.9136 18.3165L22.0444 21.4407C22.3374 21.7337 22.3384 22.2077 22.0454 22.5007C21.8994 22.6487 21.7064 22.7217 21.5144 22.7217C21.3234 22.7217 21.1314 22.6487 20.9844 22.5027L17.8159 19.343C16.1491 20.6778 14.0357 21.477 11.739 21.477C6.369 21.477 2 17.108 2 11.738C2 6.368 6.369 2 11.739 2ZM11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738C3.5 16.281 7.196 19.977 11.739 19.977C16.281 19.977 19.977 16.281 19.977 11.738C19.977 7.195 16.281 3.5 11.739 3.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </li>
            <li className="mr-[22px]">
              <span className="">
                <Bell />
              </span>
            </li>
            <li className="">
              <div className="user-profile-image">
                <img src={userimg} alt="user-profile-image"></img>
                <span className="ml-1">
                <SmallAeroDown />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
