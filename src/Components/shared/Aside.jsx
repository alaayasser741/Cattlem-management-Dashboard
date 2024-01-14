import React from "react";
import { useDispatch } from "react-redux";
import { toggleAside } from "../../store/layoutSlice";
import styles from "../../styles/aside.module.css";
import {
  LogoIcon,
  DoubleArrowIcon,
  DashboardIcon,
  FarmIcon,
  EmployeeIcon,
  ActivityIcon,
  SettingIcon,
  LogoutIcon,
} from "../../assets/icons/icons";

const Aside = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.aside__container}>
        <div className={styles.aside__title}>
          <span className={styles.aside__logo}>
            <i>
              <LogoIcon />
            </i>
            <h1>Cattlem</h1>
          </span>
          <i
            className={styles.aside__double_arrow}
            onClick={() => dispatch(toggleAside())}
          >
            <DoubleArrowIcon />
          </i>
        </div>
        <ul className={styles.aside__links}>
          <li className={styles.aside__dashboard_link}>
            <i>
              <DashboardIcon />
            </i>
            <span>Dashboard</span>
          </li>
          <li>
            <i>
              <FarmIcon />
            </i>
            <span>Farm</span>
          </li>
          <li>
            <i>
              <EmployeeIcon />
            </i>
            <span>Employee</span>
          </li>
          <li>
            <i>
              <ActivityIcon />
            </i>
            <span>Activity</span>
          </li>
        </ul>
      </div>
      <ul className={`${styles.aside__links} ${styles.aside__settings}`}>
          <li>
            <i>
              <SettingIcon />
            </i>
            <span>Settings</span>
          </li>
          <li>
            <i>
              <LogoutIcon />
            </i>
            <span>Log Out</span>
          </li>
        </ul>
    </>
  );
};

export default Aside;
