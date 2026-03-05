import { Main } from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar/>
      <Main/>
    </div>
  );
}
