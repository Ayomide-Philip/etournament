// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardLayout from "../componet/dashboardLayout";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Etournaments",
  description: "A web app where you can create an efootball tournament",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-900 min-h-screen `}>
        <DashboardLayout />
        {children}
      </body>
    </html>
  );
}

// ${geistSans.variable} ${geistMono.variable}
