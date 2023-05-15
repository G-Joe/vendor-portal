import { Tabs } from "antd";
import Button from "components/Button/Button";
import AllOrders from "./AllOrders";
import "./OrderMgt.scss";

const onChange = ({ key }: any) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: `All Orders`,
    children: <AllOrders/>,
  },
  {
    key: "2",
    label: `Pending Orders`,
    children: `Pending Orders`,
  },
  {
    key: "3",
    label: `Completed Orders`,
    children: `Completed Orders`,
  },
  {
    key: "4",
    label: `Cancelled Orders`,
    children: `Cancelled Orders`,
  },
];

const OrderManagement = () => {
  return (
    <div className="order-mgt">
      <div className="heading">
        <h3>Order Management</h3>
        <Button variant="transparent" label="EXPORT AS CSV" />
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default OrderManagement;
