import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Captain's Log",
  description: "Stream Movies and web series for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
