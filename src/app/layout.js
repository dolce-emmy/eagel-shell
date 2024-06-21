import { Inter, Indie_Flower } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} ${indie.variable}` }>
        {children}
        </body>
    </html>
  );
}
