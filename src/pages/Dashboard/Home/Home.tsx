import VendorBarChart from "components/VendorPortal/BarChart";
import VendorPie from "components/VendorPortal/PieChart";
import Graph from "./Graph";
import ProductCategories from "./ProductCategory";
import OrderCard from "components/VendorPortal/OrderCard";
import TrendingProducts from "./TrendingProducts";
import OutletTable from "./Outlets";
import NewOrders from "./NewOrders";
import receivedIcon from "assets/icons/orders_received.svg"
import generatedIcon from "assets/icons/revenue_generated.svg"
import outletIcon from "assets/icons/outlets.svg"
import successfulIcon from "assets/icons/successful_orders.svg"
import arrowDown from "assets/icons/arrow_down.svg";
import "./home.scss";


const Home = () => {
  return (
    <>
     <div className="orders">
      <OrderCard title="Orders Received" status="You have not received any orders" icon={receivedIcon}/>
      <OrderCard title="Revenue Generated" status="You have not generated any revenue" icon={generatedIcon}/>
      <OrderCard title="Outlets" status="There are no outlets available" icon={outletIcon}/>
      <OrderCard title="Successful Orders" status="You do not have any successful orders" icon={successfulIcon}/>
     </div>
     <div className="mid-section">
      <div className="order-calendar">
          <div>
            <h3>Orders</h3>
            
          </div>
          <div>
          <VendorBarChart/>
          </div>
      </div>
      <div className="product-categories">
          <h3>Product Categories</h3>
          <VendorPie/>
          <ProductCategories/>
      </div>
     </div>
     <div className="bottom-section">
        <div className="revenue">
          <h3>Revenue Generation</h3>
            <Graph/>
        </div>
        <div className="trending">
          <div className="heading">
          <h3>Trending Products</h3>
          <h3>Sort By: <span className="today">Today</span> <img src={arrowDown} alt="dropdown caret"/></h3>
          </div>
          <hr/>
          <TrendingProducts/>
        </div>
     </div>
     <div className="outlets">
      <div className="heading">
      <h3>Outlets</h3>
      <h3 className="view">View All</h3>
      </div>
      <OutletTable/>
     </div>
  <div className="outlets">
    <div className="heading">
      <h3>New Orders</h3>
    </div><br/>
    <NewOrders/>
  </div>

      
    </>
  );
};

export default Home;
