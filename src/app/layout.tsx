import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eginanjar | Link-in-Bio",
  description: "Product Orchestrator & Creative Director",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
