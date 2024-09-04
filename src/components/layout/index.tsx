import RootLayout from "@/app/layout";
import Header from "../header";
import Footer from "../footer";
import MenuCategory from "../menu-category";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="md:w-[1280px] lg:w-full flex flex-col min-h-screen">
        <Header></Header>
        <MenuCategory />
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}
