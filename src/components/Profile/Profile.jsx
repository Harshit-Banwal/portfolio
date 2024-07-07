import React from 'react';

import styles from './Profile.module.css';
import { getImageUrl } from '../../utils';

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harshit</h1>
        <p className={styles.description}>
          Motivated and enthusiastic MERN full stack MERN developer with a
          strong understanding of front-end and back-end technologies.
        </p>
        <a
          href="mailto:harshitbanwal849@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/profile.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
