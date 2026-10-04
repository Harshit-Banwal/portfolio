import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Work Experience</h2>

      <div className={styles.content}>
        <ul className={styles.experienceItems}>
          <li className={styles.experienceItem}>
            <img
              src={getImageUrl("experience/company.png")}
              alt="Company icon"
            />
            <div className={styles.experienceItemText}>
              <h3>Product Engineer</h3>
              <p>Tata Consultancy Services | Sep 2024 – Present</p>

              <ul className={styles.points}>
                <li>
                  Designed and built a new microservice from scratch, including
                  16+ RESTful APIs using Spring Data JPA and PostgreSQL for the
                  TCS BaNCS Corporate Actions platform, implementing CRUD
                  workflows with request validation, centralized exception
                  handling, and standardized error responses.
                </li>
                <li>
                  Architected and implemented a distributed, event-driven Kafka
                  pipeline to stream and synchronize transactional data across
                  two independently deployed systems, validating end-to-end data
                  consistency between source and destination to ensure realtime
                  synchronization.
                </li>
                <li>
                  Owned and evolved an existing microservice, reworking 30–40%
                  of REST APIs while adding new endpoints, validations, and
                  businesslogic; wrote JUnit/Mockito unit tests and validated
                  APIs using Swagger before QA handoff.
                </li>
                <li>
                  •Resolved 100+ defects acrossthe stack,spanning Angular
                  (component logic, template bindings,service integrations) and
                  Spring Boot (REST APIs, Kafka pipelines, PostgreSQL), in
                  coordination with the QA team to improve reliability and data
                  consistency.
                </li>
                <li>
                  Contributed to a large-scale Angular 13→17 migration,
                  refactoring componentsto adopt modern control-flow syntax
                  (@if, @for, @switch), Angular Signals, and updated RxJS
                  patterns while maintaining existing functionality.
                </li>
                <li>
                  Contributed to Gerrit-based code review and CI/CD workflows
                  within an Agile/Scrum delivery model, pushing code changesfor
                  peer review and contributing to 3 production releases while
                  meeting sprint delivery timelines.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
