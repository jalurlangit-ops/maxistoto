'use client';

import { Inter } from 'next/font/google';
import GlobalConst from "./var-global";
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": '${GlobalConst.domain}',
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "8142921"
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
            "name": '${GlobalConst.title}',
            "reviewBody": '${GlobalConst.desc}'
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

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '${GlobalConst.histats}']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>{GlobalConst.title}</title>
        <meta name="description" content={GlobalConst.desc} />
        <meta name="keywords" content={GlobalConst.keywords} />
        <meta name="google-site-verification" content={GlobalConst.gsc} />
        <meta name="application-name" content={GlobalConst.brandName} />
        <link rel="author" href={GlobalConst.domain} />
        <link rel="canonical" href={GlobalConst.domain} />
        <meta name="author" content={GlobalConst.brandName} />
        <meta name="publisher" content={GlobalConst.brandName} />
        <meta name="copyright" content={GlobalConst.brandName} />
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
        <meta property="og:title" content={GlobalConst.title} />
        <meta property="og:description" content={GlobalConst.desc} />
        <meta property="og:url" content={GlobalConst.domain} />
        <meta property="og:site_name" content={GlobalConst.brandName} />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={GlobalConst.domain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={GlobalConst.brandName} />
        <meta name="twitter:title" content={GlobalConst.title} />
        <meta name="twitter:description" content={GlobalConst.desc} />
        <meta name="twitter:image" content={GlobalConst.domain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
