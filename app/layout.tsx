import TanStackProvider from "@/components/TanstackProvider/TanstackProvider";
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
        <Header/>
        {children}
        <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
