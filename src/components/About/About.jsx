import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.aboutIntro}>
          Hello! I'm Harshit Banwal, a passionate Full Stack Web Developer based
          in Ambala, Haryana.
          <br />I specialize in creating dynamic and responsive websites and
          applications.
          <br />
          I'm an avid movie enthusiast and music is another passion of mine.
        </p>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/graduate.png')} alt="Graduate icon" />
            <div className={styles.aboutItemText}>
              <h3>B.E | CSE</h3>
              <p>Chandigarh University | 2020-24</p>
              <p>CGPA: 7.48</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/school.png')} alt="School icon" />
            <div className={styles.aboutItemText}>
              <h3>XII(Science) | CBSE</h3>
              <p>S.M.S Public School | 2019-20</p>
              <p>Percentage: 80.2</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/school.png')} alt="School icon" />
            <div className={styles.aboutItemText}>
              <h3>X | CBSE</h3>
              <p>S.M.S Public School | 2017-18</p>
              <p>Percentage: 62.5</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
