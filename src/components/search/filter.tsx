import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxSquare } from "@/components/ui/checkbox";
import { HOST_API } from "@/config-global";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ButtonSelect } from "../ui/button-select";
const PRICE_FILTERS = [
  { name: "Dưới 100.000₫", _id: "0-100000" },
  { name: "100.000₫ - 200.000₫", _id: "100000-200000" },
  { name: "200.000₫ - 500.000₫", _id: "200000-500000" },
  { name: "500.000₫ - 1.000.000₫", _id: "500000-1000000" },
  { name: "Trên 1.000.000₫", _id: "1000000" },
];
export default function Filter({
  setFilter,
  filter,
  filterData,
  accordionOpen,
  setAccordionOpen,
}: any) {
  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];
  const handleFilter = (name: string, id: string) => {
    const newBrands = getSelected(filter[name], id);
    setFilter({ ...filter, [name]: newBrands });
  };
  return (
    <div className="hidden md:block">
      <div className="sticky top-3">
        <div className="sticky top-3 rounded-xl bg-white pb-4">
          <div className="border-stroke-disable flex items-center border-b px-4 pt-3 pb-2">
            <svg
              width={24}
              height={24}
              className="mr-1 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 16H14C14.5523 16 15 16.4477 15 17C15 17.5128 14.614 17.9355 14.1166 17.9933L14 18H10C9.44772 18 9 17.5523 9 17C9 16.4872 9.38604 16.0645 9.88338 16.0067L10 16H14H10ZM8 11H16C16.5523 11 17 11.4477 17 12C17 12.5128 16.614 12.9355 16.1166 12.9933L16 13H8C7.44772 13 7 12.5523 7 12C7 11.4872 7.38604 11.0645 7.88338 11.0067L8 11H16H8ZM5 6H19C19.5523 6 20 6.44772 20 7C20 7.51284 19.614 7.93551 19.1166 7.99327L19 8H5C4.44772 8 4 7.55228 4 7C4 6.48716 4.38604 6.06449 4.88338 6.00673L5 6H19H5Z"
                fill="currentColor"
              />
            </svg>
            <h3 className="text-base font-semibold">Bộ lọc nâng cao</h3>
          </div>
          <div
            className="sm-scrollbar max-h-[calc(100vmin-45px-2*12px-16px)] overflow-auto px-4 [&>:last-child]:pb-0"
            style={{ scrollbarGutter: "stable" }}
          >
            <Accordion
              onValueChange={(value) => setAccordionOpen(value)}
              type="multiple"
              value={accordionOpen}
              className="w-full"
            >
              <AccordionItem value="price">
                <AccordionTrigger className="hover:no-underline">
                  Giá bán
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {PRICE_FILTERS.map((price: any) => (
                      <li key={price._id} className="mt-1 flex p-1">
                        <div className="flex w-full items-center space-x-2 ">
                          <ButtonSelect
                            className="w-full rounded-sm h-10  "
                            selected={filter.price.includes(price._id)}
                            id={price._id}
                            onClick={() => handleFilter("price", price._id)}
                          >
                            {price.name}
                          </ButtonSelect>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="brand">
                <AccordionTrigger className="hover:no-underline">
                  Thương hiệu
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {filterData.brands.map((brand: any) => (
                      <li key={brand.name} className="mt-1 flex p-1">
                        <div className="flex items-center space-x-2 ">
                          <CheckboxSquare
                            checked={filter.brand.includes(brand._id)}
                            id={brand._id}
                            onCheckedChange={() =>
                              handleFilter("brand", brand._id)
                            }
                          />
                          <label
                            htmlFor={brand._id}
                            className="text-sm font-medium  text-gray-800/90"
                          >
                            {brand.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="category">
                <AccordionTrigger className="hover:no-underline">
                  Loại sản phẩm
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {filterData.categories.map((category: any) => (
                      <li key={category._id} className="mt-1 flex p-1">
                        <div className="flex items-center space-x-2">
                          <CheckboxSquare
                            checked={filter.category.includes(category._id)}
                            id={category._id}
                            onCheckedChange={() =>
                              handleFilter("category", category._id)
                            }
                          />
                          <label
                            htmlFor={category._id}
                            className="text-sm font-medium  text-gray-800/90"
                          >
                            {category.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="country">
                <AccordionTrigger className="hover:no-underline">
                  Xuất xứ
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {filterData.countries.map((country: any) => (
                      <li key={country._id} className="mt-1 flex p-1">
                        <div className="flex items-center space-x-2">
                          <CheckboxSquare
                            checked={filter.country.includes(country._id)}
                            id={country._id}
                            onCheckedChange={() =>
                              handleFilter("country", country._id)
                            }
                          />
                          <label
                            htmlFor={country._id}
                            className="text-sm font-medium text-gray-800/90"
                          >
                            {country.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
