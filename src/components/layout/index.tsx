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
        <div className="bg-gray-100 pb-9 flex-1 relative">
          <MenuCategory />
          {children}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
