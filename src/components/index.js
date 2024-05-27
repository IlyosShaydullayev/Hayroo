import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Routing All page will be here */
const PageRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shop & Public Routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/wish-list" element={<WishList />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
        <Route
          exact
          path="/products/category/:catId"
          element={<ProductByCategory />}
        />
        <Route
          exact={true}
          path="/checkout"
          element={
            <CartProtectedRoute>
              <CheckoutPage />
            </CartProtectedRoute>
          }
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <Route
          exact={true}
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <DashboardAdmin />
            </AdminProtectedRoute>
          }
        />
        <Route
          exact={true}
          path="/admin/dashboard/categories"
          element={
            <AdminProtectedRoute>
              <Categories />
            </AdminProtectedRoute>
          }
        />
        <Route
          exact={true}
          path="/admin/dashboard/products"
          element={
            <AdminProtectedRoute>
              <Products />
            </AdminProtectedRoute>
          }
        />
        <Route
          exact={true}
          path="/admin/dashboard/orders"
          element={
            <AdminProtectedRoute>
              <Orders />
            </AdminProtectedRoute>
          }
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <Route
          exact={true}
          path="/user/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact={true}
          path="/user/orders"
          element={
            <ProtectedRoute>
              <UserOrders />
            </ProtectedRoute>
          }
        />
        <Route
          exact={true}
          path="/user/setting"
          element={
            <ProtectedRoute>
              <SettingUser />
            </ProtectedRoute>
          }
        />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
