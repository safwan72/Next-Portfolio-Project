import { Geist, Geist_Mono,Outfit,Ovo } from "next/font/google";
import "./globals.css";

const Outfits = Outfit({
  subsets: ["latin"],weight:['400','500','600','700']
});

const Ovos = Ovo({
  subsets: ["latin"],weight:['400']
});



export const metadata = {
  title: "Portfolio -- Safwan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Outfits.className} ${Ovos.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
