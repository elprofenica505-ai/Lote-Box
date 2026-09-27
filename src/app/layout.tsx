import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Las Planadas de Escamequita | Demo independiente",
  description:
    "Demostración independiente para presentar información pública verificada sobre Las Planadas de Escamequita."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
