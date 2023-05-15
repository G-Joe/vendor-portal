import { Tabs } from "antd";
import BulkUpload from "./BulkUpload";
import ViewProduct from "./ViewProduct";
import "./product_mgt.scss";
import Button from "components/Button/Button";

const onChange = ({ key }: any) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Create Product",
    children: <BulkUpload/>,
  },
  {
    key: "2",
    label: "View Product",
    children: <ViewProduct/>,
  },
  {
    key: "3",
    label: "Expired Product",
    children: "",
  },
];

const Bulk = () => {
  return (
    <div className="bulk-upload">
      <h3>
        Product management &gt; <span>Bulk product upload</span>
      </h3>
      <div className="product-mgt-content">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Bulk;
