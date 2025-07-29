import Navigation from "./Navigation";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Navigation />
    </div>
  );
}
