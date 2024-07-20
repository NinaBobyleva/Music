import { Tracks } from "@/components/Tracks/Tracks";
import FavoriteLayout from "./favorite/layout";

export default async function Home() {
  return (
    <FavoriteLayout>
      <Tracks />
    </FavoriteLayout>
  );
}
