import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Las Planadas de Escamequita | Información del proyecto",
  description:
    "Conoce información pública sobre Las Planadas de Escamequita, en la zona de San Juan del Sur, Nicaragua. Consulta condiciones y disponibilidad actualizadas.",
  applicationName: "Las Planadas de Escamequita - demo independiente"
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
