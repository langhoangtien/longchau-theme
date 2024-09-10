export type ProductAttributeType = {
  name: string;
  values: string[];
};
export type AttributeType = { name: string; value: string };

export type ProductVariantType = {
  _id: string;
  deletedAt: string | null;
  price: number;
  discount: number;
  salePrice: number;
  productId: string;
  quantity: number;
  image?: string | undefined;
  attributes: AttributeType[];
  createdAt: string;
  updatedAt: string;
  name?: string;
};
export type VariantInCartType = ProductVariantType & { name: string };
export type ProductType = {
  _id: string;
  name: string;
  code: string;
  slug: string;
  introduction: string;
  sold: number;
  barCode: string;
  tags: string[];
  ratingAverage: number;
  attributes: ProductAttributeType[];
  images: string[];
  image: string;
  country: string;
  brand: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  variants: ProductVariantType[];
  quantity: number;
  price: number;
  discount: number;
  salePrice: number;
  maxSalePrice: number;
  id: string;
};
