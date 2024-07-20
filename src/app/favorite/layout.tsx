import { Navigation } from "@/components/Navigation/Navigation";
import styles from "../page.module.css";
import { CurrentTrackProvider } from "@/contexts/CurrentProvider";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CurrentTrackProvider>
          <main className={styles.main}>
            <Navigation />
            <div className={styles.mainCenterblock}>
              <Search />
              {children}
            </div>
            <Sidebar />
          </main>
          <Bar />
        </CurrentTrackProvider>
        <footer />
      </div>
    </div>
  );
}
