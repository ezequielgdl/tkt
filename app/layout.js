import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const lato = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "TKT",
  description: "Generated by TKT - Event Tickets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
