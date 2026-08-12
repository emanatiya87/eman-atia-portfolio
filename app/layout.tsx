import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

// TODO: replace with your real deployed domain once you have one
// (e.g. after deploying to Vercel, or a custom domain you buy).
const siteUrl = "https://eman-atia-portfolio.vercel.app";

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

const title = "Eman Atia — Front-End Developer (React & Next.js)";
const description =
  "Electrical Engineer by degree, front-end developer by craft. Portfolio of React, Next.js and TypeScript projects, internships and freelance work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Eman Atia",
  },
  description,
  keywords: [
    "Eman Atia",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Egypt",
    "Frontend Portfolio",
  ],
  authors: [{ name: "Eman Atia" }],
  creator: "Eman Atia",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Eman Atia — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
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
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Front-End Development"],
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
