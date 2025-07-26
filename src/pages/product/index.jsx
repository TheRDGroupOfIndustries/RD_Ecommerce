import ProductDetails from "./ProductDetails";

export { ProductDetails };

export const productRoute = [
  { path: "product-default", element: <ProductDetails route="default" /> },
  { path: "product-thumbnail", element: <ProductDetails route="thumbnail" /> },
  {
    path: "product-grid-media",
    element: <ProductDetails route="grid-media" />,
  },
  { path: "product-carousel", element: <ProductDetails route="carousel" /> },
  {
    path: "product-full-width",
    element: <ProductDetails route="full-width" />,
  },
  { path: "product-default/:id", element: <ProductDetails route="default" /> },
  {
    path: "product-thumbnail/:id",
    element: <ProductDetails route="thumbnail" />,
  },
  {
    path: "product-grid-media/:id",
    element: <ProductDetails route="grid-media" />,
  },
  {
    path: "product-carousel/:id",
    element: <ProductDetails route="carousel" />,
  },
  {
    path: "product-full-width/:id",
    element: <ProductDetails route="full-width" />,
  },
];
