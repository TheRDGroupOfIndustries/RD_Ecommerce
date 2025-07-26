import React from "react";
import { Home, Building2, MapPin } from "lucide-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../store/addressSlice";

const AddressCard = ({ address }) => {
  const dispatch = useDispatch();
  const {
    fullName,
    phone,
    alternatePhone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
    addressType,
    isDefault,
  } = address;

  const icon =
    addressType === "Home" ? (
      <Home className="w-5 h-5 inline mr-1" />
    ) : addressType === "Work" ? (
      <Building2 className="w-5 h-5 inline mr-1" />
    ) : (
      <MapPin className="w-5 h-5 inline mr-1" />
    );

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddress(id));
  };

  return (
    <div className="border rounded-2xl shadow-sm p-4 bg-white w-full max-w-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg text-gray-800">
          {icon} {addressType} Address
        </h3>
        {/* {isDefault && (
          <span className="text-sm text-white bg-blue-600 px-2 py-0.5 rounded-full">
            Default
          </span>
        )} */}
        {/* <input  type="radio" name="address" id="" /> */}
        <div className="flex gap-2">
          {/* <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <MdEdit size={20} />
          </button> */}
          <button
            onClick={() => handleDeleteAddress(address._id)}
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>

      <div className="text-gray-700 space-y-1 text-sm">
        <p>
          <span className="font-medium">Name:</span> {fullName}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        {alternatePhone && (
          <p>
            <span className="font-medium">Alt Phone:</span> {alternatePhone}
          </p>
        )}
        <p>
          <span className="font-medium">Address:</span> {addressLine1},{" "}
          {addressLine2 && `${addressLine2}, `}
          {city}, {state} - {postalCode}, {country}
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
