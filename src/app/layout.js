import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "TAG | Stop Searching. Get found.",
  description:
    "Stop Searching. Get found by your ideal school, university, scholarship, internship, mentor, tutors, coach, alumni, career, job, peers around the world. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
      </Head> */}
      <body className={montserrat.className}>
      <script src="/script.js"></script>
        {children}
      </body>
    </html>
  );
}
