import { Poppins, Marvel, Rajdhani } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-modern-drawer/dist/index.css'
import InfoNav from "./pages/infonav/page";
import Header from "./pages/header/page";
import Footer from "./pages/footer/page";
import CategoriesNav from "./pages/categoriesnav/page";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins"
});

const marvel = Marvel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marvel"
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rajdhani"
});

export const metadata = {
  title: "Friends Trade International | Professional CCTV Service & Installation Service Provider In Bangladesh| We Have Also Other IT Products Like PC ,PC Accessories, Toner ETC. | Home",
  description: "Professional CCTV Service & Installation Service Provider In Bangladesh| We Have Also Other IT Products Like PC ,PC Accessories, Toner ETC. | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${poppins.variable} ${marvel.variable} ${rajdhani.variable}`}>
          <InfoNav />
          <Header />
          <CategoriesNav />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
