import ProductDetails from "./ProductDetails";


export{
  ProductDetails,
}


export const productRoute = [
  { path: "product-default", element: <ProductDetails route='default' /> },
  { path: "product-thumbnail", element: <ProductDetails route='thumbnail' /> },
  { path: "product-grid-media", element: <ProductDetails route='grid-media' /> },
  { path: "product-carousel", element: <ProductDetails route='carousel' /> },
  { path: "product-full-width", element: <ProductDetails route='full-width' /> },
]