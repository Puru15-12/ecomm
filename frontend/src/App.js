
import "./App.css";

<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home.jsx";
// import screen from "./components/screen.jsx";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/auth/login.jsx"
import Register from "./components/auth/register.jsx"
=======
import { BrowserRouter as Router, Routes } from "react-router-dom";
>>>>>>> 7fea33ab0bad21dcebc9a24714deb714979fff41

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";

import useUserRoutes from "./components/routes/userRoutes";
import useAdminRoutes from "./components/routes/adminRoutes";

function App() {
  const userRoutes = useUserRoutes();
  const adminRoutes = useAdminRoutes();

  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
<<<<<<< HEAD
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
=======
            {userRoutes}
            {adminRoutes}
>>>>>>> 7fea33ab0bad21dcebc9a24714deb714979fff41
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
