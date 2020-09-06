import React, { useState } from 'react';
import styles from './app.module.scss';

function App() {
  const [mask, setMask] = useState(true);
  return (
    <div>
      <section className={styles.banner}>
        <iframe
          src="https://www.youtube.com/embed/i4oPnu1Uaws?autoplay=0&rel=0&showinfo=0&suggestedQuality=large&enablejsapi=1&origin=https%3A%2F%2Fhahow.in&widgetid=1"
          title="YouTube video player"
        ></iframe>

        <div className={mask ? styles.mask : styles.maskHidden} />

        <picture>
          <source
            srcset="https://hahow.in/2nd-birthday/img/keyvisual/keyvisual.png"
            media="(min-width: 768px)"
          />
          <source
            srcset="https://hahow.in/2nd-birthday/img/keyvisual/keyvisual-m.png"
            media="(max-width: 480px)"
          />
          <source
            srcset="https://hahow.in/2nd-birthday/img/keyvisual/keyvisual-m@2x.png"
            media="(max-width: 767px), (min-width: 481px)"
          />
          <img
            className={styles.slogan}
            srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="平凡博士學"
            onClick={() => setMask((prev) => !prev)}
          />
        </picture>
        <button className={styles.play}>
          <span>觀看</span>
          <i />
          <span>影片</span>
        </button>
        <a href="https://hahow.in" target="_blank" rel="noopener noreferrer">
          <img
            className={styles.linkToHahow}
            data-original="/2nd-birthday/img/keyvisual/logo.svg"
            alt="logo"
            src="https://hahow.in/2nd-birthday/img/keyvisual/logo.svg"
          />
        </a>
      </section>
      <nav className={styles.menu}>
        <a href="/#video" title="#">
          二週年課程
        </a>
        <a href="/#introduction" title="#">
          關於 Hahow
        </a>
        <a href="/#product" title="#">
          限量週邊
        </a>
      </nav>
      <section className={styles.lifeStyle}>yellow</section>
      <section className={styles.case} id="video">
        case
      </section>
      <section className={styles.hahow} id="introduction">
        hahow
      </section>
      <section className={styles.product} id="product">
        product
      </section>
      <section className={styles.fb}>fb</section>
    </div>
  );
}

export default App;
