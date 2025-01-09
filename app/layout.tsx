'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.bizworkit.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.bizworkit.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini",
            "reviewBody": "18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini</title>
        <meta name="description" content="18toto hadir sebagai solusi bagi pecinta slot online yang mencari kemudahan dan kenyamanan dalam bermain. Dengan fitur slot deposit 3000 via Dana, Anda dapat menikmati permainan seru tanpa harus mengeluarkan modal besar" />
        <meta name="keywords" content="18toto, Deposit Dana 5000k, Situs Judi Online, Dana Slot77, situs Slot Dana, Gopay 69 Slot, Situs Slot Deposit 5000, Situs Slot Gacor Hari Ini Via Dana, Slot Deposit 3000 Via Dana, Situs Slot Gacor Jam Ini" />
        <meta name="google-site-verification" content="veMyOTuOGYmEQDMDDL9R58xwmmCMdesJMcTMkYDqZ3Q" />
        <meta name="application-name" content="18toto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="18toto" />
        <meta name="publisher" content="18toto" />
        <meta name="copyright" content="18toto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini" />
        <meta property="og:description" content="18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="18toto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="18toto" />
        <meta name="twitter:title" content="18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini" />
        <meta name="twitter:description" content="18toto : Slot Deposit 3000 Via Dana Dan Situs Slot Gacor Jam Ini, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
