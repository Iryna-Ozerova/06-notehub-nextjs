import TanStackProvider from "@/components/TanstackProvider/TanstackProvider";
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <main>
          {children}
          </main>
        <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
