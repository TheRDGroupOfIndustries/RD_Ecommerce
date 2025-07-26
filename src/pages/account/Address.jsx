import React, { useEffect, useState } from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { AddressCard, AddressForm } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../store/addressSlice";



const Address = () => {
  const [isAddressFormShow, setIsAddressFormShow] = useState(false)
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { addresses } = useSelector((state) => state.address);
  const dispatch = useDispatch();




  const fetchAllAddresses = async () => {
    dispatch(getAllAddresses())
  }

  useEffect(()=>{
    if (isAuthenticated) {
      fetchAllAddresses();
    }
  },[isAuthenticated])

  return (
    <div className=" p-6 rounded-lg max-w-4xl w-full">
      <p className="text-gray-700 mb-6">
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {addresses?.length > 0 ? (
          addresses.map((address, index) => (
            <AddressCard
              key={address._id}
              address={address}
            />
          )) 
        ): (
          <div className="col-span-2 text-center text-gray-500">
            No addresses found. Please add an address.
          </div>
        )}
      </div>

      {/* Add New Address Section */}
      <div className=" p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center space-y-4">
        <div className="bg-red-500 p-4 rounded-full text-white">
          <BsFillHouseAddFill size={40} />
        </div>
        <p className="text-lg font-semibold text-gray-900">Add New Address</p>
        <button
          onClick={() => setIsAddressFormShow(true)}
          className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200"
        >
          Add
        </button>
      </div>

      <div className={`${isAddressFormShow ? "fixed" : "hidden"} inset-0 bg-zinc-800/40 flex h-screen justify-center items-center pt-10 md:pt-16 z-[100] font-sans`}>
      <AddressForm addressId={null} handleClose={()=>setIsAddressFormShow(false)} />
      </div>
    </div>
  );
};

export default Address;
