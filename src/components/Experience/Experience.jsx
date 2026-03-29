import React from 'react';
import styles from './Experience.module.css';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Work Experience</h2>

      <div className={styles.content}>
        <ul className={styles.experienceItems}>
          <li className={styles.experienceItem}>
            <img
              src={getImageUrl('experience/company.png')}
              alt="Company icon"
            />
            <div className={styles.experienceItemText}>
              <h3>Product Engineer</h3>
              <p>Tata Consultancy Services | Sep 2024 – Present</p>

              <ul className={styles.points}>
                <li>
                  Designed and developed 8+ RESTful APIs using Spring Boot for
                  scalable CRUD operations.
                </li>
                <li>
                  Improved API reliability by implementing validation and
                  centralized error handling (↓ issues by ~30%).
                </li>
                <li>
                  Contributed to Angular 13 → 17 migration for better
                  performance and compatibility.
                </li>
                <li>
                  Built data pipelines ensuring 99.9% data accuracy during
                  high-volume transactions.
                </li>
                <li>
                  Resolved 25+ UI bugs and collaborated with QA for stable
                  releases.
                </li>
                <li>
                  Managed CI/CD workflows using Gerrit for smooth deployments.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
