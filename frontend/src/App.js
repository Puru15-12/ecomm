import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Login from "./components/auth/login.jsx"
import Register from "./components/auth/register.jsx"

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/ProductDetails.jsx";
import Profile from "./components/user/Profile.jsx";
import UpdateProfile from "./components/user/UpdateProfile.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/me/profile"
              element={
                  <Profile />
              }
            />

            <Route
              path="/me/update_profile"
              element={
                  <UpdateProfile />
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