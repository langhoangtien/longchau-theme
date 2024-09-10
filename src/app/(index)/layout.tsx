import MainLayout from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout>{children}</MainLayout>;
}
