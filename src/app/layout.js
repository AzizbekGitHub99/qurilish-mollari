import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
});

export const metadata = {
  title: "Qurilish mollari | Getter",
  description: "Qurilish mollari | Getter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
