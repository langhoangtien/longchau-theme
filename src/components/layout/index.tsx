import Header from "../header";
import Footer from "../footer";
import MenuCategory from "../menu-category";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header></Header>
      <MenuCategory />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto sm:max-w-3xl lg:max-w-full">
          {/* <MenuCategory /> */}
          {children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
