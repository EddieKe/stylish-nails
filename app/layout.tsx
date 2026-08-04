import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-preahvihear",
});

export const metadata: Metadata = {
  title: "Stylish Nails",
  description: "Nails, Lashes, Brows, One Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${preahvihear.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/@tabler/icons-webfont/3.1.0/tabler-icons.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-preahvihear">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
