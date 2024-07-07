import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:harshitbanwal849@gmail.com">
            harshitbanwal849@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/harshit-banwal-707482207/">
            linkedin.com/harshit-banwal
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          <a href="https://github.com/Harshit-Banwal">
            github.com/Harshit-Banwal
          </a>
        </li>
      </ul>
    </footer>
  );
};
