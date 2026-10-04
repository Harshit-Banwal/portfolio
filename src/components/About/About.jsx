import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.aboutIntro}>
          Hello! I'm Harshit Banwal, a System Engineer at Tata Consultancy
          Services, currently based in Gurugram, Haryana.
          <br />
          I build scalable backend systems and full-stack applications, with a
          strong focus on Java, Spring Boot, Microservices, Kafka, PostgreSQL,
          Angular, and React.
          <br />
          Alongside my professional work, I enjoy building AI-powered
          applications and exploring RAG, LLMs, and Vector Search.
          <br />
          When I'm not coding, you'll usually find me watching movies or
          listening to music.
        </p>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduate.png")} alt="Graduate icon" />
            <div className={styles.aboutItemText}>
              <h3>B.E | CSE</h3>
              <p>Chandigarh University | 2020-24</p>
              <p>CGPA: 7.48</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/school.png")} alt="School icon" />
            <div className={styles.aboutItemText}>
              <h3>XII(Science) | CBSE</h3>
              <p>S.M.S Public School | 2019-20</p>
              <p>Percentage: 80.2</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/school.png")} alt="School icon" />
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
