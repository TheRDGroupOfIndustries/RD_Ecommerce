import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/orderSlice";
import { IoClose } from "react-icons/io5";
import { getOrderDetails } from "../../services/orderService";
import { toast } from "react-hot-toast";

const getStatusClass = (status) => {
  switch (status) {
    case "DELIVERED":
      return "bg-green-100 text-green-800";
    case "IN PROGRESS":
      return "bg-blue-100 text-blue-800";
    case "CANCELED":
      return "bg-red-100 text-red-800";
    case "DELAYED":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const OrderDetails = ({ orderId, setOpenDetailsPannel }) => {
  const [order, setOrder] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await getOrderDetails(orderId);
      setOrder(response);
      // console.log(response)
    } catch (error) {
      console.error("Failed to fetch order details:", error);
      toast.error("Failed to fetch order details");
    }
  };

  useEffect(() => {
    if (orderId) fetchDetails();
  }, [orderId]);

  return (
    <div className="fixed top-16 left-0 w-full h-full bg-black/50 z-50 flex justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-5xl h-[90vh] md:h-auto rounded-lg shadow p-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <button
            onClick={() => setOpenDetailsPannel(false)}
            className="p-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="w-full overflow-y-auto">
          {order ? (
            <div className="mx-auto px-2 sm:px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Ordered Items</h3>
                <div className="space-y-4">
                  {order.items.map(({ product, quantity, _id, color, size }) => (
                    <div
                      key={_id}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg p-4 bg-white shadow-sm"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full sm:w-28 h-48 sm:h-32 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{product.title}</h4>
                        <p className="text-sm text-gray-600">
                          {product.description}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 capitalize">
                          Brand: {product.brand} | Qty: {quantity} | Color: {color} | Size: {size}
                        </p>
                        <p className="mt-1 text-sm text-green-600">
                          ₹{product.salePrice.toFixed(2)}{" "}
                          <span className="line-through text-gray-400 text-xs ml-2">
                            ₹{product.price.toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    Shipping Address
                  </h3>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>{order.address.fullName}</strong>
                    </p>
                    <p>
                      {order.address.addressLine1}, {order.address.addressLine2}
                    </p>
                    <p>
                      {order.address.city}, {order.address.state} -{" "}
                      {order.address.postalCode}
                    </p>
                    <p>{order.address.country}</p>
                    <p>Phone: {order.address.phone}</p>
                    {order.address.alternatePhone && (
                      <p>Alt: {order.address.alternatePhone}</p>
                    )}
                  </div>
                </div>

                <div className="rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    Billing Details
                  </h3>
                  <div className="text-sm space-y-2 pl-2">
                    <p>
                      <span className="font-medium">Billing Method:</span>{" "}
                      {order.billingMethod.toUpperCase()}
                    </p>
                    <p>
                      <span className="font-medium">Total Price:</span> ₹
                      {Number(order.totalPrice).toFixed(2)}
                    </p>
                    <p>
                      <span className="font-bold">Order Status:</span>{" "}
                      <span
                        className={`px-2 py-1 rounded-full ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">No Details Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  const [openDetailsPannel, setOpenDetailsPannel] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const {userData, isAuthenticated } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData && isAuthenticated) {
      dispatch(getAllOrders());
    }
  }, [userData && isAuthenticated]);

  return (
    <div className="px-2 sm:px-4 py-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Orders</h2>

      {/* Table for Desktop */}
      {orders?.length ? (
        <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ORDER #
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  DATE PURCHASED
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  STATUS
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  TOTAL
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders?.map((order) => (
                <tr
                  key={order._id}
                  className="text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{order._id}</td>
                  <td className="px-4 py-3">{order.createdAt.split("T")[0]}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">₹{order.totalPrice.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => {
                        setOpenDetailsPannel(true);
                        setSelectedOrderId(order._id);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-lg font-semibold text-center">No Orders Available</p>
      )}

      {/* Cards for Mobile */}
      <div className="block md:hidden space-y-4 mt-4">
        {orders?.map((order) => (
          <div
            key={order._id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <div className="mb-2">
              <p className="text-sm text-gray-500">ORDER ID</p>
              <p className="font-medium">{order._id}</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-500">DATE</p>
              <p>{order.createdAt.split("T")[0]}</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-500">STATUS</p>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-500">TOTAL</p>
              <p className="font-semibold">₹{order.totalPrice.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <button
                onClick={() => {
                  setOpenDetailsPannel(true);
                  setSelectedOrderId(order._id);
                }}
                className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Details Panel */}
      {openDetailsPannel && (
        <OrderDetails
          orderId={selectedOrderId}
          setOpenDetailsPannel={setOpenDetailsPannel}
        />
      )}
    </div>
  );
};

export default Orders;
