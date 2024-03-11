import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './HeaderBar.module.css';

function HeaderBar() {
  return (
    <header className={styles.headerBar}>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className={styles.title}>Vite + React</h1>
    </header>
  );
}

export default HeaderBar;
