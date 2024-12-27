import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "easyfy: Instant URL Shortening | No Login, No Hassle | Free & Fast Link Shortener",
  description: "easyfy is the ultimate free URL shortener for quick, secure, and hassle-free link management. Shorten long URLs instantly without login or registration. Our user-friendly tool offers fast performance, custom short links, and reliable redirection. Perfect for social media, marketing campaigns, and personal use. Experience the easiest way to create compact, shareable links with Easyfy - your trusted partner in simplified online sharing. Try now and streamline your digital presence!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/jpg" href="link.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      > 
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}