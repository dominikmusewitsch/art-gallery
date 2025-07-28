import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";
import FavoriteButton from "@/components/FavoriteButton";

export default function HomePage() {
  return (
    <div>
      <h1>Art Gallery</h1>
      <FavoriteButton />
      <Spotlight />
    </div>
  );
}
