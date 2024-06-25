import { Inter,Ruda, Indie_Flower } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"],
  variable: "--font-inter",
 });



 

const indie = Indie_Flower({
  
  subsets: ["latin"],
  variable: "--font-indie",
  weight: "400"
  
});


export const metadata = {
  title: "eagleShell",
  description: "mobile cases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${indie.variable} bg-gradient-to-b from-[#111B25] from-0 via-[#2B4C5B] via-35% to-[#305766] to-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
