import { Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home/Home";
import Notification from "pages/Dashboard/Home/Notification"
import Profile from "pages/Dashboard/Home/Profile/Profile";
import OrderManagement from "pages/Dashboard/OrderManagement/OrderManagement";
import CompletedOrder from "pages/Dashboard/OrderManagement/Completed/CompletedOrder";
import PendingOrder from "pages/Dashboard/OrderManagement/PendingOrder/PendingOrder";
import CancelledOrder from "pages/Dashboard/OrderManagement/CancelledOrder/CancelledOrder";
import OutletManagement from "pages/Dashboard/OutletManagement/OutletManagement";
import Ratings from "pages/Dashboard/Ratings/Ratings";
import RatingsDetails from "pages/Dashboard/Ratings/RatingsDetails";
import ProductMgt from "pages/Dashboard/ProductManagement/ProductMgt";
import Bulk from "pages/Dashboard/ProductManagement/Bulk";
import ViewProduct from "pages/Dashboard/ProductManagement/ViewProduct";



const DashboardRoutes = () => {
  return (
    <div className="main-fit">
      <Routes>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/home/notification" element={<Notification/>}/>
        <Route path="/dashboard/home/profile" element={<Profile/>}/>
        <Route path="/dashboard/order-management" element={<OrderManagement/>}/>
        <Route path="/dashboard/order-management/completed" element={<CompletedOrder/>}/>
        <Route path="/dashboard/order-management/pending" element={<PendingOrder/>}/>
        <Route path="/dashboard/order-management/cancelled" element={<CancelledOrder/>}/>
        <Route path="/dashboard/outlet-management" element={<OutletManagement/>}/>
        <Route path="/dashboard/ratings-and-reviews" element={<Ratings/>}/>
        <Route path="/dashboard/ratings-and-reviews/details" element={<RatingsDetails/>}/>
        <Route path="/dashboard/product-management" element={<ProductMgt/>}/>
        <Route path="/dashboard/product-management/bulk-upload" element={<Bulk/>}/>
        <Route path="dashboard/product-management/view-product" element={<ViewProduct/>}/>

      </Routes>
    </div>
  );
};

export default DashboardRoutes;
