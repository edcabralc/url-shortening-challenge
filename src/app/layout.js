import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["500", "600"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shortly",
  description: "More than just shoter links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
