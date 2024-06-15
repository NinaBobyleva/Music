import styles from "./page.module.css";
import { Tracks } from "@/components/Tracks/Tracks";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";
import { Search } from "@/components/Search/Search";
import { Navigation } from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <div className={styles.mainCenterblock}>
            <Search />
            <Tracks />
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer/>
      </div>
    </div>
  );
}
