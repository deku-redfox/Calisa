import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core'
import TopBtn from "@/components/TopBtn";

export const metadata = {
  title: "Acfisa",
  description: "Acfisa description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
        <TopBtn/>
      </body>
    </html>
  );
}
