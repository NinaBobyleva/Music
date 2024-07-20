import styles from "./layout.module.css";
import { CurrentTrackProvider } from "@/contexts/CurrentProvider";

export default function PlaylistBlockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CurrentTrackProvider>
        {children}
        </CurrentTrackProvider>
        <footer />
      </div>
    </div>
  );
}
