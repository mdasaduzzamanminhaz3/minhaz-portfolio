import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });

export const metadata: Metadata = {
  title: "Md Asaduzzaman Minhaz – Backend-focused Full Stack Developer",
  description: "Portfolio of Md Asaduzzaman Minhaz: Django, DRF, Node.js and Next.js projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
