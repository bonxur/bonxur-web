import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bonxur.gal"),
  title: {
    default: "Bonxur | Torre hidropónica vertical de 30 plantas",
    template: "%s | Bonxur",
  },
  description:
    "Solicita una torre hidropónica Bonxur 30 de prueba en Vigo y alrededores. Cultiva hasta 30 plantas en vertical, sin tierra y con recirculación.",
  keywords: [
    "torre hidropónica Vigo",
    "hidroponía Vigo",
    "cultivo hidropónico en terraza",
    "torre hidropónica Galicia",
    "cultivo vertical Galicia",
    "torre hidropónica para casa",
    "torre hidropónica para restaurante",
    "torre hidropónica vertical",
    "torre hidropónica 30 plantas",
    "torre hidropónica 1,5 metros",
    "cultivo sin tierra",
    "torre hidropónica Bonxur",
  ],
  openGraph: {
    title: "Bonxur | Torre hidropónica vertical de 30 plantas",
    description:
      "Bonxur busca personas de Vigo y alrededores para probar sus primeras torres hidropónicas verticales.",
    images: ["/images/bonxur-cultivo.webp"],
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
