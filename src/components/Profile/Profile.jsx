import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harshit</h1>
        <p className={styles.description}>
          Java Full-Stack Developer & System Engineer building scalable backend
          systems, distributed applications, and AI-powered products.
          Experienced in Java, Spring Boot, Microservices, Kafka, PostgreSQL,
          Angular, and React, with hands-on projects in RAG, Vector Search, and
          LLM applications.
        </p>
        <a
          href="mailto:harshitbanwal849@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
