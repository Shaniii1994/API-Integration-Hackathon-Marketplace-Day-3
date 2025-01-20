"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image"; 

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  images: { asset: { _ref: string } }[];
  rating?: number;
  categories?: string[];
  tags?: string[];
}

const TrendingProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="py-8 px-4">
      {products.map((product) => (
        <div key={product._id} className="mb-8">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-lg font-semibold">Price: ${product.price}</p>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="flex gap-4 mt-4">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={urlFor(image.asset._ref).url()} // Generate URL using urlFor
                alt={`Image of ${product.title}`}
                width={100}
                height={100}
                className="rounded-lg"
              />
            ))}
          </div>
          {product.rating && <p className="text-sm text-yellow-500">Rating: {product.rating}⭐</p>}
          {product.categories && (
            <p className="text-sm text-gray-500">
              Categories: {product.categories.join(", ")}
            </p>
          )}
          {product.tags && <p className="text-sm text-gray-500">Tags: {product.tags.join(", ")}</p>}
        </div>
      ))}
    </div>
  );
};

export default TrendingProducts;
