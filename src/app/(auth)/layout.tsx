import Navbar from "@/components/shared/Navbar";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

export default AuthLayout;
