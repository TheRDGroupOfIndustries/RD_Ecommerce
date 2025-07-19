import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer, Header } from "./components";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTokenData } from "./store/authSlice";

function App() {
  // const {pathname} =useLocation()
  // // const token = localStorage.getItem('token')
  // const { isAuthenticated, token } = useSelector(state => state.auth)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const AuthenticateUserByToken =()=>{

  // }

  // useEffect(()=>{
  //   if( token && isAuthenticated && pathname.includes("auth")){
  //     navigate('/')
  //   } else if(token && !isAuthenticated){
  //     dispatch(getTokenData(token))
  //   } else if(!isAuthenticated && pathname.includes("account")){
  //     navigate('/')
  //   }
  // }, [pathname, token])

  return (
    <>
      <header className="w-full bg-base-ground shadow-md fixed top-0 z-50">
        <Header />
      </header>
      <main className="flex-1 min-h-screen bg-base-100 mt-16 bg-base-ground relative">
        <Outlet />
      </main>
      <footer className="w-full bg-base-ground border-t border-gray-600">
        <Footer />
      </footer>
      <Toaster/>
    </>
  );
}

export default App;
