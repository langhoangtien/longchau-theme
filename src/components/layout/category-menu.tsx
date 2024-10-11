export default function CategoryMenu({ display, setDisplay }: any) {
  return (
    <div className="relative">
      <div
        // onMouseLeave={() => setDisplay("none")}
        style={{ display: display }}
        className="h-[100vh] w-[100vw] absolute top-0 overflow-x-hidden  left-0 z-[200] bg-black/65"
      ></div>
    </div>
  );
}
