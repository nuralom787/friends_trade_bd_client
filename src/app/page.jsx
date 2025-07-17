import BannerPage from "./pages/banner/page";
import Products from "./pages/products/page";

export default function Home() {

  return (
    <div className="text-black py-6">
      <section className="container-width">
        <BannerPage />
        <Products />
      </section>
    </div>
  );
}
