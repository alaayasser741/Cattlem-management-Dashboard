import React from 'react';
import styles from '../styles/Dashboard.module.css';
import Aside from '../components/shared/Aside';
import Nav from '../components/shared/Nav';

const Dashboard = () => {
  return (
    <main className={styles.dashboard__layout}>
        <aside className={styles.dashboard__aside}>
            <Aside />
        </aside>
        <nav className={styles.dashboard__nav}>
            <Nav/>
        </nav>
        <section className={styles.dashboard__body}>
            section
        </section>
    </main>
  )
}

export default Dashboard