import { Tracks } from "@/components/Tracks/Tracks";
import FavoriteLayout from "./tracks/layout";

export default async function Home() {
  return (
    <FavoriteLayout>
      <Tracks />
    </FavoriteLayout>
  );
}
