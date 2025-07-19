import React, { useState } from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";

const AddressCard = ({ title, address, onEdit, onRemove }) => (
  <div className=" rounded-lg border border-black overflow-hidden">
    <h3 className="text-lg font-semibold text-gray-900 p-4">{title}</h3>
    {address ? (
      <>
        <div className="p-4">
          <p className="text-gray-700">{address.name}</p>
          <p className="text-gray-700">{address.street}</p>
          <p className="text-gray-700">Mo. {address.phone}</p>
          <p className="text-gray-700">{address.email}</p>
        </div>
        <div className="flex space-x-4 p-4 bg-white border-t text-sm text-gray-600">
          <button
            onClick={onEdit}
            className="flex items-center hover:text-blue-600 transition-colors cursor-pointer"
          >
            <MdEdit size={20} />
            Edit
          </button>
          <button
            onClick={onRemove}
            className="flex items-center hover:text-red-600 transition-colors cursor-pointer"
          >
            <MdDelete size={20} />
            Remove
          </button>
        </div>
      </>
    ) : (
      <p className="text-gray-500">No address set.</p>
    )}
  </div>
);

const Address = () => {
  const [billingAddress, setBillingAddress] = useState({
    name: "John Doe",
    street: "London",
    phone: "012-345-6789",
    email: "johndoe@example.com",
  });

  const [shippingAddress, setShippingAddress] = useState({
    name: "John Doe",
    street: "London",
    phone: "012-345-6789",
    email: "johndoe@example.com",
  });

  const handleEditAddress = (type) => {
    console.log(`Editing ${type} address`);
    alert(`Simulating edit for ${type} address.`);
  };

  const handleRemoveAddress = (type) => {
    console.log(`Removing ${type} address`);
    const confirmRemove = window.confirm(
      `Are you sure you want to remove the ${type} address?`
    );
    if (confirmRemove) {
      if (type === "billing") {
        setBillingAddress(null);
      } else if (type === "shipping") {
        setShippingAddress(null);
      }
      alert(`${type} address removed.`);
    }
  };

  const handleAddNewAddress = () => {
    console.log("Adding new address");
    alert("Simulating adding a new address.");
  };

  return (
    <div className=" p-6 rounded-lg max-w-4xl w-full">
      <p className="text-gray-700 mb-6">
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AddressCard
          title="Billing address"
          address={billingAddress}
          onEdit={() => handleEditAddress("billing")}
          onRemove={() => handleRemoveAddress("billing")}
        />
        <AddressCard
          title="Shipping address"
          address={shippingAddress}
          onEdit={() => handleEditAddress("shipping")}
          onRemove={() => handleRemoveAddress("shipping")}
        />
      </div>

      {/* Add New Address Section */}
      <div className=" p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center space-y-4">
        <div className="bg-red-500 p-4 rounded-full text-white">
          <BsFillHouseAddFill size={40} />
        </div>
        <p className="text-lg font-semibold text-gray-900">Add New Address</p>
        <button
          onClick={handleAddNewAddress}
          className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Address;
