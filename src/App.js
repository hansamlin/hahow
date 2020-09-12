import React, { useState } from 'react';
import styles from './app.module.scss';
import Product from './components/product';
import Video from './components/video';

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
            srcSet="https://hahow.in/2nd-birthday/img/keyvisual/keyvisual.png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://hahow.in/2nd-birthday/img/keyvisual/keyvisual-m.png"
            media="(max-width: 480px)"
          />
          <source
            srcSet="https://hahow.in/2nd-birthday/img/keyvisual/keyvisual-m@2x.png"
            media="(max-width: 767px), (min-width: 481px)"
          />
          <img
            className={styles.slogan}
            srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="平凡博士學"
            onClick={() => setMask((prev) => !prev)}
          />
        </picture>
        <button className={styles.play}>
          <i />
          <span>
            <span>觀看</span>
            <i />
            <span>影片</span>
          </span>
        </button>
        <div className={styles.content}>
          <p>
            你我身旁都有這樣的人，總是顛覆你對學習新事物的想像，曖曖內含光的揮灑五顏六色的才華！他們可能在某個隨性時刻
            ，點亮你我心中的熱情火苗。擁有這樣的生活哲學，我們稱為平凡博士學。
          </p>
        </div>
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

      <section className={styles.lifeStyle}>
        <div>
          <img
            src="https://hahow.in/2nd-birthday/img/lifestyle/ch1.png"
            alt="ch1"
            className={styles.ch1}
          />
          <img
            src="https://hahow.in/2nd-birthday/img/lifestyle/ch3.png"
            alt="ch3"
            className={styles.ch3}
          />
          <img
            src="https://hahow.in/2nd-birthday/img/lifestyle/ch2.png"
            alt="ch2"
            className={styles.ch2}
          />
          <h3>學習是一種生活風格，而生活就是一種跨領域</h3>
          <div className={styles.content}>
            今天實現夢裡的創意料理，明天化身線上遊戲的編劇家，日子變得好玩了，沒壓力的培養興趣，讓自己變得更美好了。大概就是宇宙聽到呼喊，眼前的規律、畫作或科技都等著被探索，享受鑽研而且樂在其中，一起成為熱愛開闊視野的平凡博士！
          </div>
          <a href="#video" className={styles.play}>
            <span>點這滑壘觀看</span>
          </a>
        </div>
      </section>

      <section className={styles.case} id="video">
        <div className={styles.text}>
          <h3>平凡博士的暖心提案</h3>
          <div>
            <div className={styles.h4}>
              Hahow 這次不募資，就是要給你免費的、滿滿的暖心知識！
            </div>
            <div className={styles.content}>
              學習的好處百百種，但什麼是最單純、最貼近生活的成果？
              從這個問題開始，我們展開了平凡博士的暖心提案！
              <br />
              <br />
              我們想，擁有知識技能之後，是否還能增進關係、帶給身旁的人無限暖意？這次，Hahow
              與 20 位 #Hahow 好老師 合作，獨家製作 20 種領域、20 堂免費觀看的 8
              分鐘課程，無論是大概念、小知識，讓大家在日常生活中，帶一點意想不到的技能走，同時感受到我們的暖心，更帶給其他人暖意！
            </div>
          </div>
        </div>
        <Video />
      </section>

      <section className={styles.hahow} id="introduction">
        <img src="https://hahow.in/2nd-birthday/img/logo-vertical.png" alt="" />
        <div className={styles.right}>
          <h3>亞洲領先跨領域募資課程網站 學那些學校不會教的事！</h3>
          <div className={styles.content}>
            ㄏㄚˇ
            ㄏㄠ，取自台語「學校」的發音，一個能讓你隨時隨地探索熱情的地方。
            首創募資課程機制，並秉持「共享教育」精神，無論你要自學好玩的課程、分享一項拿手知識技能，都有
            Hahow 陪你！
          </div>
          <a
            href="https://hahow.in/about/hahow?utm_source=2017bc-eventside&utm_medium=go-to-hahow&utm_campaign=hahow-2ndbirthday"
            title="來去Hahow"
            className={styles.link}
          >
            <span>來去 Hahow</span>
          </a>
        </div>
      </section>

      <section className={styles.product} id="product">
        <div className={styles.note}>
          <span>好學校 2 歲惹！</span>
          <span>企業週邊免運販售中！</span>
        </div>
        <h3>Hahow 好週邊打包開賣</h3>
        <div className={styles.content}>
          Hahow 夥伴愛不釋手，內含 4
          樣充滿我們精神的隨身物品，希望隨時提醒你學習超有趣，一起走到哪學到哪
        </div>

        <Product />
      </section>

      <section className={styles.fb}>
        <h3>生活因探索而不平凡，這麼重要的事情，你一定想分享！</h3>

        <button className={styles.shareBtn}>
          分享到臉書 <i className={styles.icon} />
        </button>
      </section>
    </div>
  );
}

export default App;
