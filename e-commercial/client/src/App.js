import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./component/common/footer/Footer";
import Header from "./component/common/header/Header";
import ProfileSidebar from "./component/common/ProfileSidebar/ProfileSidebar";
import Spinner from "./component/common/spinner/Spinner";
import CheckoutPage from "./feature/Checkout/page/CheckoutPage";
import Landing from "./feature/Landing/pages/Landing";
import Login from "./feature/Login/page/Login";
import Orders from "./feature/PersonalPage/page/Orders";
import Profile from "./feature/PersonalPage/page/Profile";
import Wishlist from "./feature/PersonalPage/page/Wishlist";
import ProductDetail from "./feature/ProductDetail/page/ProductDetail";
import ProductPage from "./feature/ProductPage/page/ProductPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="/" element={<Landing />}></Route>
          <Route path="/account" element={<ProfileSidebar />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="wishlist" element={<Wishlist />}></Route>
            <Route path="orders" element={<Orders />}></Route>
          </Route>
          <Route path="/:cateslug" element={<ProductPage />}></Route>
          <Route path="/:cateslug/:subslug" element={<ProductPage />}></Route>
          <Route
            path="/:cateslug/:subslug/:id"
            element={<ProductDetail />}
          ></Route>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
