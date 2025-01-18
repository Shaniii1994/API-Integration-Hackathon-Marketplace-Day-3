import React from "react";
import Hero from "@/app/components/Hero";
import Topcateg from "@/app/components/topcateg";
import Offers from "@/app/components/offers";
import Blog from "@/app/components/blog";
import product from "@/sanity/schemaTypes/product";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Topcateg/>
      <Offers/>
      <Blog/>
      </div>

    
  );
}

