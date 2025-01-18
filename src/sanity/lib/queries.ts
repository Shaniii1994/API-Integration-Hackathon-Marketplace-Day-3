import { groq } from "next-sanity";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  pricewithoutDiscount?: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  imageurl: string;
};

export const allproducts: string = groq`
  *[_type == "product"]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    pricewithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageurl": image.asset->url
  }
`;

export const fourPro: string = groq`
  *[_type == "product"][0...3]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    pricewithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageurl": image.asset->url
  }
`;
