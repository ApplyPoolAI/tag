import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: "TAG | Stop Searching. Get found.",
  description: "Stop Searching. Get found by your ideal school, university, scholarship, internship, mentor, tutors, coach, alumni, career, job, peers around the world. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3320128,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
