

export interface Product {
    _id : String;
    name: string; // Product name
    image: {
      asset: {
        _ref: string; // Reference to the image asset
        _type: string; // Type of asset
      };
      hotspot?: boolean; // Optional hotspot feature
    };
    price: number; // Product price
    description?: string; // Optional description (with max 150 characters)
    discountPercentage?: number; // Optional discount percentage (0 to 100)
    isFeaturedProduct?: boolean; // Optional featured product flag
    stockLevel: number; // Stock level (positive number)
    category: 'Chair' | 'Sofa'; // Category (Chair or Sofa)
  } 