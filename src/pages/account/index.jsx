import Account from "./Account";
import Address from "./Address";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import Downloads from "./Downloads";
import OrderDetails from "./OrderDetails";
import Orders from "./Orders";
import Profile from "./Profile";
import ReturnRequests from "./ReturnRequests";
import Reviews from "./Reviews";
import Wishlist from "./Wishlist";



export{
  OrderDetails,
  Reviews,
  Wishlist,
  Cart,
  Address,
  Profile,
  ReturnRequests,
  Downloads,
    Orders,
    Account,
    Dashboard
}

export const accountRoute = [
  { index: true, element: <Dashboard /> },
  { path: 'orders', element: <Orders /> },
  { path: 'downloads', element: <Downloads /> },
  { path: 'return-request', element: <ReturnRequests /> },
  { path: 'profile', element: <Profile /> },
  { path: 'cart', element: <Cart /> }, 
  { path: 'wishlist', element: <Wishlist /> }, 
  { path: 'address', element: <Address /> },
  { path: 'review', element: <Reviews /> },
  { path: 'order-details', element: <OrderDetails /> },

]