import React, { useState } from "react";

const Downloads = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt1",
      name: "Collar Casual Shirt",
      downloadLink: "#", 
    },
    {
      id: 2,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt2",
      name: "Collar Trending Shirt",
      downloadLink: "#",
    },
    {
      id: 3,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt3",
      name: "Casual Full Shirt",
      downloadLink: "#",
    },
    {
      id: 4,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt4",
      name: "Trending Full Shirt",
      downloadLink: "#",
    },
  ]);

  const handleDownload = (productName, downloadLink) => {
    console.log(`Downloading ${productName} from: ${downloadLink}`);
    window.open(downloadLink, "_blank");
  };
  return (
    <div className=" p-6 rounded-lg max-w-4xl w-full">
      <h2 className="text-2xl font-semibold mb-6">Product Downloads</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">
          No products available for download.
        </p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-6/12"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                      }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-medium text-gray-900">
                    {product.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() =>
                        handleDownload(product.name, product.downloadLink)
                      }
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-200 whitespace-nowrap"
                    >
                      Download
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Downloads;
