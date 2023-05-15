import {Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import ViewProduct from "./ViewProduct";
import "./product_mgt.scss";
import Button from "components/Button/Button";

const onChange=({key}:any) => {
    console.log(key);
}

const items = [
    {
        key:"1",
        label:"Create Product",
        children:<CreateProduct/>,
    },
    {
        key:"2",
        label:"View Product",
        children:<ViewProduct/>,
    },
    {
        key:"3",
        label:"Expired Product",
        children:"",
    },
]

const ProductMgt = () => {
    const navigate = useNavigate();
    return (
        <div className="product-mgt">
            <div className="top">
            <Button label="BULK PRODUCT UPLOAD" variant="orange_transparent" onClick={()=> navigate("/dashboard/product-management/bulk-upload")}/>
            </div>
            <div className="product-mgt-content">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
            </div>
        </div>
    )
}

export default ProductMgt;