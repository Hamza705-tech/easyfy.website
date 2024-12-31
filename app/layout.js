import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Relative path


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
  title: "easyfy: Instant URL Shortening | No Login, No Hassle | Free & Fast Link Shortener ",
  description: "easyfy is the ultimate free URL shortener for quick, secure, and hassle-free link management. Shorten long URLs instantly without login or registration. Our user-friendly tool offers fast performance, custom short links, and reliable redirection. Perfect for social media, marketing campaigns, and personal use. Experience the easiest way to create compact, shareable links with Easyfy - your trusted partner in simplified online sharing. Try now and streamline your digital presence!",
  keywords: "url shortener, free link shortener, shorten urls, instant link shortening, best no-login URL shortener, link management tools, custom short URLs, how to shorten URLs without login, best no-login URL shortener, easyfy ",
  opengraphs: {
    title: "easyfy: Instant URL Shortening | No Login, No Hassle | Free & Fast Link Shortener",
    description: "easyfy is the ultimate free URL shortener for quick, secure, and hassle-free link management. Shorten long URLs instantly without login or registration. Our user-friendly tool offers fast performance, custom short links, and reliable redirection. Perfect for social media, marketing campaigns, and personal use. Experience the easiest way to create compact, shareable links with Easyfy - your trusted partner in simplified online sharing. Try now and streamline your digital presence!",
    url: "https://easyfy.website",
    type: "website",
    site_name: "easyfy",
    twitter: {
      title: "easyfy: Instant URL Shortening | No Login, No Hassle | Free & Fast Link Shortener",
      description: "easyfy is the ultimate free URL shortener for quick, secure, and hassle-free link management. Shorten long URLs instantly without login or registration. Our user-friendly tool offers fast performance, custom short links, and reliable redirection. Perfect for social media, marketing campaigns, and personal use. Experience the easiest way to create compact, shareable links with Easyfy - your trusted partner in simplified online sharing. Try now and streamline your digital presence!",
    url: "https://easyfy.website",
      creator: "Hamza siddiqui",
      site: "https://easyfy.website",
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5623627555151972"
         crossorigin="anonymous"></script>

        )}
      <link rel="icon" type="image/jpg" href="link.png" /> 
      <meta name="google-site-verification" content="jp06OIgZMY98UiJH_FIKue5KLzOFL1KS1b4-BL1ctiI" />
     </head>
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