import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const baseUrl = 'https://bmark.agency';

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/Blue-Mark-favicon.webp",
    },
    alternates: {
      canonical: locale === 'ar' ? baseUrl : `${baseUrl}/en`,
      languages: {
        'ar': baseUrl,
        'en': `${baseUrl}/en`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: locale === 'ar' ? baseUrl : `${baseUrl}/en`,
      siteName: 'Blue Mark Growth Agency',
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === 'ar';

  return (
    <html 
      lang={locale} 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`scroll-smooth ${fontSans.variable} ${fontHeading.variable} ${fontArabic.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1075501568771068'); 
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`antialiased bg-[#000814] text-white min-h-screen ${isRtl ? 'font-arabic' : 'font-sans'}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-3YBJ022RFT"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-3YBJ022RFT');
            `}
          </Script>
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1075501568771068&ev=PageView&noscript=1" alt="" />
          </noscript>
          <Suspense fallback={null}>
            <FacebookPixel />
          </Suspense>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
