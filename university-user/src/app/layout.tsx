import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "State Allied Healthcare University - Lucknow",
    template: "%s | SAHC Lucknow"
  },
  description: "State Allied Healthcare University, Lucknow - Providing quality healthcare education with modern facilities and experienced faculty to shape the future of healthcare professionals.",
  keywords: [
    "healthcare education",
    "medical college",
    "nursing college",
    "pharmacy college",
    "medical lab technology",
    "physiotherapy",
    "healthcare council",
    "lucknow university",
    "medical courses",
    "healthcare programs"
  ],
  authors: [{ name: "State Allied Healthcare University" }],
  creator: "State Allied Healthcare University",
  publisher: "State Allied Healthcare University",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahcl.edu.in",
    siteName: "State Allied Healthcare University",
    title: "State Allied Healthcare University - Lucknow",
    description: "Quality healthcare education with modern facilities and experienced faculty",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "State Allied Healthcare University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "State Allied Healthcare University - Lucknow",
    description: "Quality healthcare education with modern facilities and experienced faculty",
    images: ["/og-image.jpg"],
    creator: "@sahc_lucknow",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
