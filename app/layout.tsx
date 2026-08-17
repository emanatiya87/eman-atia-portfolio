import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://eman-atia-portfolio-lyart.vercel.app/";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const title =
  "Eman Atia — Front-End Developer in Cairo, Egypt (React & Next.js)";
const description =
  "Eman Atia is a Cairo-based front-end developer specializing in React, Next.js and TypeScript. Electrical Engineering graduate turned software engineer, with experience across internships (ITI, FEDIS, Link Development), freelance CMS-driven web apps, and technical instruction. Available for freelance and full-time front-end roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Eman Atia",
  },
  description,
  applicationName: "Eman Atia — Portfolio",
  category: "technology",
  keywords: [
    "Eman Atia",
    "Front-End Developer",
    "Front-End Developer Cairo",
    "React Developer Egypt",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Egypt",
    "Frontend Portfolio",
    "React Next.js TypeScript Portfolio",
    "ITI Front-End Graduate",
  ],
  authors: [{ name: "Eman Atia", url: siteUrl }],
  creator: "Eman Atia",
  publisher: "Eman Atia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Eman Atia — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  formatDetection: {
    email: true,
    telephone: true,
  },
  // TODO: after deploying, get this from Google Search Console
  // (Settings → Ownership verification → HTML tag) and uncomment:
  // verification: { google: "your-verification-code" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eman Atia Sayed",
  jobTitle: "Front-End Developer",
  email: "mailto:Emanatiya87@gmail.com",
  telephone: "+201113364852",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ain Shams University",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Front-End Development",
    "freelance",
    "web development",
    "software engineering",
    "instructor",
  ],
  // TODO: replace with real profile URLs
  sameAs: ["https://linkedin.com/in/TODO", "https://github.com/TODO"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
