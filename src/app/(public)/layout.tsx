import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="h-18" />
      {children}
      <Footer />
    </div>
  );
}

export default PublicLayout;
