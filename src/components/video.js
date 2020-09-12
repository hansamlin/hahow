import React from 'react';
import data from './video.json';
import styles from './video.module.scss';

export default function Video() {
  return (
    <div className={styles.container}>
      {data.map((e, i) => (
        <div key={i.toString()} className={styles.card}>
          <figure>
            <img src={e.src} alt="" />
          </figure>
          <figcaption>{e.figcaption}</figcaption>
        </div>
      ))}
    </div>
  );
}
