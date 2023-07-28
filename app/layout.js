import { Ranga, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const ranga = Ranga({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-ranga-bold",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "David Kando Music",
  description: "Music from David Kando",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ranga.variable} ${robotoCondensed.variable}`}>
      <body
        className='flex min-h-screen items-center justify-center font-roboto'
      >
        {children}
      </body>
    </html>
  );
}
