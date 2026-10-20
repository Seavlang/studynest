import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ variable: "--font-gabarito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyNest — Classrooms",
  description: "Instructor portal",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${gabarito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><div className="blobs" aria-hidden><i /><i /><i /><i /></div>
        {children}
      </body>
    </html>
  );
}
