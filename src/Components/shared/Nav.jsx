import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAside } from "../../store/layoutSlice";
import styles from "../../styles/nav.module.css";
import {
  SearchIcon,
  FlagIcon,
  DownArrowIcon,
  SettingIcon,
  LogoutIcon,
  EmployeeIcon,
  MenuIcon,
  CloseIcon,
} from "../../assets/icons/icons";
import userImg from "../../assets/image/userImg.png";

const Nav = () => {
  const [dropListLangActive, setDropListLangActive] = useState(false);
  const [dropListProfileActive, setDropListProfileActive] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const isAsideOpen = useSelector((state) => state.layoutAside.isAsideOpen);
  return (
    <>
      <div className={styles.nav__input_search}>
        <i
          className={
            isAsideOpen
              ? `${styles.nav__aside_menu_active}`
              : `${styles.nav__aside_menu}`
          }
          onClick={() => dispatch(toggleAside())}
        >
          <MenuIcon />
        </i>
        <i onClick={() => setIsSearchOpen(!isSearchOpen)} className={styles.nav__search__icon}>
          {isSearchOpen ? <CloseIcon/> : <SearchIcon />}
        </i>
        <i className={styles.nav__search__icon_active}>
          <SearchIcon />
        </i>
        <form>
          <input
            className={isSearchOpen && `${styles.nav__input_search_active}`}
            type="search"
            placeholder="Search for data..."
          />
        </form>
      </div>
      <div className={isSearchOpen ?`${styles.nav__user_search_hide}` :`${styles.nav__user}`}>
        <div
          className={styles.nav__language}
          onClick={() => setDropListLangActive(!dropListLangActive)}
        >
          <div className={styles.nav__language_title}>
            <i>
              <FlagIcon />
            </i>
            <span>Eng</span>
          </div>
          <i>
            <DownArrowIcon />
          </i>
          <ul
            className={
              dropListLangActive
                ? `${styles.nav__language_drop_list}  ${styles.nav__language_drop_list_active}`
                : `${styles.nav__language_drop_list}`
            }
          >
            <li>
              <i>
                <FlagIcon />
              </i>
              <span>Eng</span>
            </li>
            <li>
              <i>
                <FlagIcon />
              </i>
              <span>Eng</span>
            </li>
            <li>
              <i>
                <FlagIcon />
              </i>
              <span>Eng</span>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setDropListProfileActive(!dropListProfileActive)}
          className={styles.nav__profile}
        >
          <div className={styles.nav__user__info}>
            <div className={styles.nav__user__image}>
              <img src={userImg} alt="user" />
            </div>
            <div className={styles.nav__user__title}>
              <h3>Jay Hargudson</h3>
              <p>Admin</p>
            </div>
          </div>
          <i>
            <DownArrowIcon />
          </i>
          <ul
            className={
              dropListProfileActive
                ? `${styles.nav__user_drop_list}  ${styles.nav__user_drop_list_active}`
                : `${styles.nav__user_drop_list}`
            }
          >
            <li>
              <i>
                <EmployeeIcon />
              </i>
              Profile
            </li>
            <li>
              <i>
                <SettingIcon />
              </i>
              Settings
            </li>
            <li>
              <i>
                <LogoutIcon />
              </i>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
