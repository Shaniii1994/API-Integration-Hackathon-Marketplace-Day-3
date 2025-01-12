import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FurnitureBanner from '@/app/components/banner';
import TrendingProducts from './trendingproducts';
const Hero = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="mb-5">
        <FurnitureBanner />
      </div>

      {/* Featured Products Section */}
      <div className="text-[#1A0B5B] text-[42px] font-bold flex justify-center mt-20 mb-5">
  Featured Products
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
  {[3, 4, 5, 6].map((image, index) => (
    <div
      key={index}
      className="w-[270px] h-[361px] bg-gray-50 hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-md"
    >
      <div className="w-full h-[270px] flex justify-center items-center">
        <Image
          src={`/${image}.png`}
          width={178}
          height={178}
          alt={`Chair ${index + 1}`}
          className="object-cover"
        />
      </div>
      <div className={`p-4 ${index === 1 ? 'bg-[#2F1AC4] text-white' : 'bg-white'}`}>
        <p
          className={`mb-3 text-center font-serif text-[18px] ${
            index === 1 ? '' : 'text-pink-600'
          }`}
        >
          Cantiliver Chair
        </p>
        <p
          className={`mb-2 text-center text-[14px] font-mono ${
            index === 1 ? '' : 'text-[#2F1AC4]'
          }`}
        >
          Code: 0353536
        </p>
        <p
          className={`text-center text-[14px] font-sans ${
            index === 1 ? '' : 'text-[#2F1AC4]'
          }`}
        >
          $42.00
        </p>
      </div>
    </div>
  ))}
</div>
 {/* Latest Products Section */}
      <div className="text-[#1A0B5B] text-3xl md:text-4xl font-bold flex justify-center mt-20 mb-10">
        Latest Products
      </div>
      <ul className="flex justify-center items-center mb-5 gap-6 text-sm md:text-base">
        {['New Arrival', 'Best Seller', 'Feature', 'Special Offer'].map(
          (item, index) => (
            <li key={index}>
              <Link
                href="/"
                className={`${
                  index === 0 ? 'text-[#FB2E86] underline' : 'text-[#151875]'
                } hover:text-pink-500 transition-colors`}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20">
        {[7, 8, 3, 10, 11, 6].map((img, index) => (
          <div
            key={index}
            className="w-[360px] h-[306px] bg-gray-50 hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden"
          >
            <div className="flex justify-center items-center h-3/4">
              <Image src={`/${img}.png`} width={223} height={229} alt="chair" />
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <p className="text-sm font-semibold text-gray-800">
                Comfort HandyCraft
              </p>
              <div className="flex gap-3 text-sm">
                <p>$41.00</p>
                <p className="text-pink-600">$65.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shopex Offers Section */}
      <div className="text-[#1A0B5B] text-3xl md:text-4xl font-bold flex justify-center mt-20 mb-10">
        What Shopex Offers
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
        {[1, 2, 3, 4].map((offer, index) => (
          <div
            key={index}
            className="w-[270px] h-[320px] bg-white shadow-md hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden"
          >
            <div className="flex justify-center items-center h-2/5 mt-5">
              <Image
                src={`/offer${offer}.png`}
                width={65}
                height={65}
                alt="offer"
              />
            </div>
            <div className="text-center p-4">
              <h1 className="text-lg font-bold text-[#151875] mb-2">
                24/7 Support
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features Section */}
      <div className="py-10 px-5 mt-20 bg-purple-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/Sofa.png"
            alt="Sofa"
            width={400}
            height={400}
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Unique Features Of Latest & Trending Products
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>All frames constructed with hardwood solids and laminates</li>
              <li>Reinforced with double wood dowels, glue, screws, and nails</li>
              <li>Arms, backs, and seats are structurally reinforced</li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
              Add To Cart
            </button>
            <p className="mt-2 text-gray-500">
              B&B Italian Sofa —{' '}
              <span className="text-pink-500">$32.00</span>
            </p>
          </div>
        </div>
      </div>
      <TrendingProducts/>
      <div className="m-6 py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
    <div className="relative bg-[#FFF6FB] p-4 flex flex-col justify-between h-[250px] rounded-lg shadow-sm">
      <div
        className="absolute inset-0 mt-6 bg-no-repeat bg-right h-full rounded-lg"
        style={{ backgroundImage: "url('/clock.png')" }}
      />
      <div className="relative z-10 text-left p-4">
        <h2 className="text-[#151875] text-xl font-semibold mb-2">
          23% off in all products
        </h2>
        <Link href="/" className="text-pink-500 underline">
          Shop Now
        </Link>
      </div>
    </div>
    <div className="relative bg-[#EEEFFB] p-4 flex flex-col justify-between h-[250px] rounded-lg shadow-sm">
      <div
        className="absolute inset-0 mt-6 bg-no-repeat bg-right h-full rounded-lg"
        style={{ backgroundImage: "url('/promo2.png')" }}
      />
      <div className="relative z-10 text-left p-4">
        <h2 className="text-[#151875] text-xl font-semibold mb-2">
          23% off in all products
        </h2>
        <Link href="/" className="text-pink-500 underline">
          View Collection
        </Link>
      </div>
    </div>
    <div className="grid grid-rows-3 gap-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="grid grid-cols-2 gap-4 items-center">
          <div className="relative w-[80px] h-[80px] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={`/image${item}.png`}
              alt={`Product ${item}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#151875] text-lg font-semibold">
              Executive Seat Chair
            </h3>
            <p className="text-[#151875] line-through">$32.00</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="text-center mt-10">
  <h1 className="text-3xl font-bold text-blue-900">Discount Item</h1>
  <div className="mt-5 space-x-5">
    <span className="cursor-pointer text-pink-500 underline">Wood Chair</span>
    <span className="cursor-pointer">Plastic Chair</span>
    <span className="cursor-pointer">Sofa Collection</span>
  </div>
  <div className="flex flex-wrap items-center justify-center mt-10 px-6">
    <div className="p-4 max-w-[600px]">
      <h2 className="text-4xl font-bold text-[#151875] mb-4">
        20% Discount Of All Products
      </h2>
      <p className="text-[#FB2E86] mb-6">Eams Sofa Compact</p>
      <ul className="space-y-2 text-[#B7BACB]">
        <li className="flex items-center">
          <span className="mr-2 text-[#7569B2]">✔</span> Material expose like
          metals
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-[#7569B2]">✔</span> Simple neutral colors
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-[#7569B2]">✔</span> Clear lines and
          geometric figures
        </li>
      </ul>
      <button className="bg-pink-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-pink-600">
        Shop Now
      </button>
    </div>
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div className="rounded-full bg-pink-100 w-72 h-72"></div>
      <Image
        src="/sofa2.png"
        alt="Eams Sofa Compact"
        width={400}
        height={400}
        className="object-cover"
      />
    </div>
  </div>
</div>
</div>
  );
};

export default Hero;
