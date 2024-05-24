import { Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${yanone.className} min-h-[100vh] bg-indigo-600 overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
