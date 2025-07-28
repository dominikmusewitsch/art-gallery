import ArtList from "../components/ArtList";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight />
      <ArtList />
    </div>
  );
}
