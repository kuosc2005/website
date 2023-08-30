import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Feature = ({ Svg, title, description }) => {
  return (
    <>
      <div className={clsx('col col--4', styles.featureRow)}>
        <div className={styles.featureImage}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureText}>
          <h2 className={styles.featureTitle}>{title}</h2>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </>
  );
};

const KUCC = () => {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="col">
           Kathmandu University Computer Club
           UCC is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in the year 1997. Being registered as the first club of Kathmandu University with the registration number 001/1997 in the Student Welfare, KUCC has worked in the field of ICT for twenty years. 
          </div>
        </div>
      </section>
    </>
  );
};

export default KUCC;