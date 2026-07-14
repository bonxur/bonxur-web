import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const siteUrl = "https://bonxur.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bonxur | Torre hidropónica vertical de 30 plantas",
    template: "%s | Bonxur",
  },
  description:
    "Solicita una torre hidropónica Bonxur 30 de prueba en Vigo y alrededores. Cultiva hasta 30 plantas en vertical, sin tierra y con recirculación.",
  keywords: [
    "torre hidropónica",
    "torre hidropónica vertical",
    "torre hidropónica Vigo",
    "torre hidropónica Galicia",
    "hidroponía Vigo",
    "hidroponía Galicia",
    "huerto vertical terraza",
    "cultivo hidropónico en terraza",
    "cultivo vertical sin tierra",
    "torre hidropónica para restaurantes",
    "cultivo vertical Galicia",
    "torre hidropónica para casa",
    "torre hidropónica para restaurante",
    "torre hidropónica 30 plantas",
    "torre hidropónica 1,5 metros",
    "cultivo sin tierra",
    "torre hidropónica Bonxur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bonxur | Torre hidropónica vertical de 30 plantas",
    description:
      "Bonxur busca personas de Vigo y alrededores para probar sus primeras torres hidropónicas verticales.",
    url: siteUrl,
    siteName: "Bonxur",
    images: [
      {
        url: "/images/torre-con-plantas.jpg",
        width: 1200,
        height: 1600,
        alt: "Torre hidropónica vertical Bonxur cultivando lechugas en una terraza",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonxur | Torre hidropónica vertical de 30 plantas",
    description:
      "Torre hidropónica vertical hecha en Galicia para cultivar hasta 30 plantas en terrazas, patios, fincas y restaurantes.",
    images: ["/images/torre-con-plantas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bonxur",
  url: siteUrl,
  logo: `${siteUrl}/images/bonxur-logo-stacked.png`,
  email: "info@bonxur.com",
  areaServed: [
    "Vigo",
    "Galicia",
    "Redondela",
    "Nigrán",
    "Gondomar",
    "Pontevedra",
    "Baiona",
    "Cangas",
    "Moaña",
  ],
  description:
    "Bonxur diseña torres hidropónicas verticales en Galicia para cultivar sin tierra en terrazas, patios, fincas y espacios profesionales.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bonxur",
  url: siteUrl,
  inLanguage: "es",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
