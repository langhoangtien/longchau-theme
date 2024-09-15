import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxSquare } from "@/components/ui/checkbox";

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
                    onCheckedChange={() => handleFilter("brand", brand._id)}
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
                    onCheckedChange={() => handleFilter("country", country._id)}
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
  );
}
