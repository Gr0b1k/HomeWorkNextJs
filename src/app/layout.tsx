import type { Metadata } from "next";
import { Roboto , Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
   subsets: ["cyrillic"], 
   weight: ["300","400","500","700"],
   variable: "--font-roboto"
  });

  const oswald = Oswald({
    subsets: ["cyrillic"], 
    weight: ["500","600","700"],
    variable: "--font-oswold"
   });

export const metadata: Metadata = {
  title: "Gayming shoop",
  description: "Продажа видеоигр",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable} bg-сontain bg-full bg-no-repeat bg-hero bg-zinc-950/90 text-white w-full `}>
        <div className="__next">
          <Header />
          <main className="main w-full" id="main">
             <div className="w-full" id="mainPage">
               {children}
             </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
