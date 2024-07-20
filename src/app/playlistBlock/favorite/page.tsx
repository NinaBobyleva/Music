import { FavoriteTracks } from "@/components/FavoriteTracks/FavoriteTracks";
import styles from "./page.module.css";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Navigation } from "@/components/Navigation/Navigation";
import { Bar } from "@/components/Bar/Bar";

export default function FavoritePage() {
  return (
    <>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.mainCenterblock}>
          <Search />
          <FavoriteTracks />
        </div>
        <Sidebar />
      </main>
      <Bar />
    </>
  );
}
