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
                  Designed and built a new Spring Boot microservice from scratch
                  for the TCS BaNCS Corporate Actions platform (dividends,
                  splits, and other securities events), delivering 16+ REST APIs
                  with Spring Data JPA and PostgreSQL, including header and
                  input validation, pagination, centralized exception handling,
                  standardized error responses, and OpenAPI/Swagger
                  documentation.
                </li>

                <li>
                  Applied transaction management (@Transactional), idempotent
                  request handling, and Redis caching to keep API behavior
                  consistent and performant.
                </li>

                <li>
                  Architected and implemented an event-driven Kafka pipeline to
                  synchronize transactional data between two independently
                  deployed systems, with end-to-end consistency validation
                  between source and destination.
                </li>

                <li>
                  Owned and evolved an existing microservice across
                  client-feedback sprint cycles, reworking 30–40% of its REST
                  APIs and adding new endpoints, validations, and business logic
                  as requirements changed.
                </li>

                <li>
                  Wrote data-driven JUnit/Mockito tests that validate multiple
                  DB-defined business rules in a single run, replacing manual
                  request-body changes. Ran regression checks in the deployment
                  environment and validated APIs via Swagger before QA handoff,
                  contributing to a decline in defects reaching QA.
                </li>

                <li>
                  Contributed to an Angular 13→17 migration, refactoring
                  components to the new control-flow syntax (@if, @for,
                  @switch), Angular Signals, and updated RxJS patterns without
                  regressions.
                </li>

                <li>
                  Resolved 100+ defects across Angular and Spring Boot (REST
                  APIs, Kafka pipelines, PostgreSQL), using deployment logs for
                  root-cause analysis in coordination with the QA team, within
                  Gerrit-based peer review and Agile/Scrum delivery.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
