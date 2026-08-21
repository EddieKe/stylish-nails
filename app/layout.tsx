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
  icons: {
    icon: "/stylish_transparent_logo.png",
  },
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
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
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
