import React from "react";
import styles from "../styles/dashboard.module.css";
import Aside from "../Components/shared/Aside";
import Nav from "../Components/shared/Nav";
import Activity from "../Components/Activity";
import { useSelector, useDispatch } from "react-redux";
import { toggleAside } from "../store/layoutSlice";

const Dashboard = () => {
  const isAsideOpen = useSelector((state) => state.layoutAside.isAsideOpen);
  const dispatch = useDispatch();

  return (
    <main
      className={
        isAsideOpen
          ? `${styles.dashboard__layout_hide_aside} ${styles.dashboard__layout}`
          : `${styles.dashboard__layout}`
      }
    >
      <aside
        className={
          isAsideOpen
            ? `${styles.dashboard__aside}`
            : `${styles.dashboard__aside_hide}`
        }
      >
        <Aside />
      </aside>
      <nav className={styles.dashboard__nav}>
        <Nav />
      </nav>
      <section className={isAsideOpen ? `${styles.dashboard__body} ${styles.remove_margin}`:`${styles.dashboard__body}`}>
        <Activity />
      </section>
      <div
        onClick={() => dispatch(toggleAside())}
        className={
          isAsideOpen
            ? `${styles.overlay_show} ${styles.overlay}`
            : `${styles.overlay}`
        }
      />
    </main>
  );
};

export default Dashboard;
