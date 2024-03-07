import styles from "./App.module.css";
import React,{useState}from "react";

const App = () =>{

  const [active,setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
    console.log('clicked');
  }

  return(
    <>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <h1 className={styles.header__title}>
            <a href="#">ロゴ</a>
          </h1>
          <nav className={`${styles.header__nav} ${styles.nav} ${active?styles.active:""}`}>
            <ul className={`${styles.nav__items} ${styles.nav_items}`}>
              <li className={styles.nav__items__item}><a href="">メニュー</a></li>
              <li className={styles.nav__items__item}><a href="">メニュー</a></li>
              <li className={styles.nav__items__item}><a href="">メニュー</a></li>
            </ul>
          </nav>
          <button onClick={classToggle} className={`${styles.header__hamburger} ${styles.hamburger} ${active?styles.active:""}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <main className={styles.main}>
        メインコンテンツエリア
      </main>
      <footer className={styles.footer}>
        <div>
          フッターエリア
        </div>
      </footer>
    </div>
    </>
  )
}

export default App;
