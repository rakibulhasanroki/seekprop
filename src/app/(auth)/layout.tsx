import Navbar from "@/components/shared/Navbar";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar isAuth={true} />
      {children}
    </div>
  );
}

export default AuthLayout;
