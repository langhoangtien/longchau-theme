"use client";

import { ProductList, ToopDiscountSection } from "@/components/home";
import SplashScreen from "@/components/loading/splash-screen";
import { HOST_API } from "@/config-global";
import { useBoolean } from "@/hooks/use-boolean";
import { convertImagePathToUrl, encodeData } from "@/lib/common";
import { ProductType } from "@/types";
import { useCallback, useEffect, useState } from "react";

const SORT_OPTIONS = [
  { value: "latest", label: "Mới nhất", orderBy: "createdAt", order: -1 },
  { value: "oldest", label: "Cũ nhất", orderBy: "createdAt", order: 1 },
  { value: "popular", label: "Bán chạy", orderBy: "sold", order: -1 },
];

export default function EcommerceProductsPage(props: any) {
  const search = props?.searchParams?.s;
  console.log("search", props.searchParams);

  const mobileOpen = useBoolean();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const [brands, setBrands] = useState([]);
  const [rating, setRating] = useState(null);
  const [countries, setCountries] = useState([]);
  const [prices, setPrices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [sort, setSort] = useState({
    value: "latest",
    label: "Mới nhất",
    orderBy: "createdAt",
    order: -1,
  });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const sortValue = encodeData({
        orderBy: sort.orderBy,
        order: sort.order,
      });
      const limit = 10;
      const skip = (page - 1) * limit;
      const categoryFilter = categories.map((item: any) => item._id);

      const filterRaw = {
        brand: brands,
        country: countries,
        price: prices,
        category: categoryFilter,
        search,
        rating,
      };
      const url = `${HOST_API}/products/?limit=${limit}&skip=${skip}&sort=${sortValue}&filterRaw=${encodeData(
        filterRaw
      )}`;
      const resJson = await fetch(url);
      const res = await resJson.json();
      const productsMapped = res.items.map((product: ProductType) => ({
        ...product,

        image: convertImagePathToUrl(product.image, 250),
      }));
      setProducts(productsMapped);
      setCount(Math.ceil(res.count / limit));
      setLoading(false);
    };
    getData();
  }, [page, brands, countries, prices, categories, rating, search, sort]);

  const handleChangeViewMode = useCallback(
    (event: React.ChangeEvent<any>, newAlignment: string) => {
      if (newAlignment !== null) {
        setViewMode(newAlignment);
      }
    },
    []
  );

  const handleClearAll = useCallback(() => {
    setBrands([]);
    setCountries([]);
    setPrices([]);
    setCategories([]);
    setRating(null);
  }, []);

  const handleChangeSort = useCallback((event: React.ChangeEvent<any>) => {
    const sortValue: any = SORT_OPTIONS.find(
      (option) => option.value === event.target.value
    );
    setSort(sortValue);
  }, []);
  return (
    <SplashScreen />
    // <div>

    //   <div className={`relative py-4 bg-blue-50`}>
    //     <div className="isolate container-lite pt-10 pb-4 md:pt-12 md:pb-6">
    //       <ProductList products={products} />
    //     </div>
    //   </div>
    // </div>
  );
}
