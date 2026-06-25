import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/sections/Navbar";
import MobileGate from "@/components/MobileGate";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body className= "bg-zinc-800 text-white">
        <MobileGate>

        <Navbar />
        <main className="overflow-y-auto flex-1">
               {children}
        </main>
        </MobileGate>
       
      </body>
    </html>
  );
}

