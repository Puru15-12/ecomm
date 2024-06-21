import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home.jsx";
// import screen from "./components/screen.jsx";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/auth/login.jsx"
import Register from "./components/auth/register.jsx"

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/ProductDetails.jsx";
import Profile from "./components/user/Profile.jsx";
import UpdateProfile from "./components/user/UpdateProfile.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import UploadAvatar from "./components/user/UploadAvatar.jsx";
import UpdatePassword from "./components/user/UpdatePassword.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword";
import Cart from "./components/cart/cart.jsx";
import ShippingInfo from "./components/cart/Shipping.jsx";
import ConfirmOrder from "./components/cart/ConfirmOrder.jsx";
import PaymentMethod from "./components/cart/PaymentMethod.jsx";
import MyOrders from "./components/order/MyOrders.jsx";
import OrderDetails from "./components/order/OrderDetails.jsx";
import Invoice from "./components/invoice/Invoice.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
             
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
            
            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update_profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
                  
              }
            />

            <Route
              path="/me/upload_avatar"
              element={
                <ProtectedRoute>
                  <UploadAvatar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/update_password"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" 
              element={
                <ProtectedRoute>
                  <ShippingInfo />
                </ProtectedRoute>
              }
            />
            <Route path="/confirm_order"
              element={
                <ProtectedRoute>
                  <ConfirmOrder />
                </ProtectedRoute>
              }
            />
            <Route path="/payment_method"
              element={
                <ProtectedRoute>
                  <PaymentMethod />
                </ProtectedRoute>
              }
            />
            <Route path="/me/orders"
              element={
                <ProtectedRoute>
                  <MyOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/order/:id"
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/invoice/order/:id"
              element={
                <ProtectedRoute>
                  <Invoice />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;