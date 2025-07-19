import React, { useState } from "react";

const Downloads = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://placehold.co/80x80/F3F4F6/1F2937?text=Shirt1",
      name: "Collar Casual Shirt",
      downloadLink: "#", // Replace with actual download link
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
    // In a real application, you would trigger the actual file download here.
    // For demonstration, we'll open the link in a new tab.
    window.open(downloadLink, "_blank");
  };

  return (
    <div className="">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
        Product Downloads
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 py-10">
          No products available for download.
        </p>
      ) : (
        <>
          {/* Desktop/Tablet Table Layout */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="pl-6 pr-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product, index) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="pl-6 pr-2 py-4 whitespace-nowrap text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium text-gray-900 text-base">
                        {product.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            handleDownload(product.name, product.downloadLink)
                          }
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm whitespace-nowrap"
                          aria-label={`Download ${product.name}`}
                        >
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <span className="text-gray-600 text-lg font-semibold w-8 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/80x80/F3F4F6/1F2937?text=No+Image";
                    }}
                  />
                  <h3 className="font-medium text-gray-900 text-base self-center">
                    {product.name}
                  </h3>
                </div>

                <div className="flex justify-center pt-3 border-t border-gray-100">
                  <button
                    onClick={() =>
                      handleDownload(product.name, product.downloadLink)
                    }
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-base w-full"
                    aria-label={`Download ${product.name}`}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Downloads;