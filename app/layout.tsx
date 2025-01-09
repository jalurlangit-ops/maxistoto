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
            "name": "Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100",
            "reviewBody": "Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
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
        <title>Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100</title>
        <meta name="description" content="Maxistoto hadir sebagai situs terpercaya yang memberikan penawaran istimewa bagi para pemain baru! Dengan bonus new member 100% di awal, Anda bisa langsung menggandakan keseruan bermain tanpa perlu khawatir. Cukup lakukan deposit pertama Anda, dan nikmati tambahan saldo yang siap membawa Anda lebih dekat ke kemenangan besar" />
        <meta name="keywords" content="Maxistoto, Bonus New Member 100, Info Link Gacor, Link Gacor Hari Ini RTP Tinggi, Link Maxwin 2025, Info Link Slot Gacor, Link Slot Terpercaya Dan Gacor, Link Depo Gacor, Gacor77 Link Alternatif, Slot138 Login Link Alternatif" />
        <meta name="google-site-verification" content="eOaMJChOeLAWOTxBJC9KbWLvySruP7AJ4PYR0sgMpqE" />
        <meta name="application-name" content="maxistoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="maxistoto" />
        <meta name="publisher" content="maxistoto" />
        <meta name="copyright" content="maxistoto" />
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
        <meta property="og:title" content="Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100" />
        <meta property="og:description" content="Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="maxistoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="maxistoto" />
        <meta name="twitter:title" content="Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100" />
        <meta name="twitter:description" content="Maxistoto : Bonus New Member 100 Di Awal Dan Situs Bonus New Member 100, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
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
