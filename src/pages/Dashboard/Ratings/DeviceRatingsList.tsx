import { useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import AppleCharger from "assets/images/apple_charger.png";
import Dell from "assets/images/dell_xps.png";
import LaptopCharger from "assets/images/laptop_charger.png";
import Samsung from "assets/images/samsung_22.png";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import searchIcon from "assets/icons/search_icon.svg";


const DeviceRatings = () => {
  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      sorter: {
        compare: (a: any, b: any) => a.sn - b.sn,
        multiple: 7,
      },
    },
    {
      title: "Date Created",
      dataIndex: "date",
      sorter: {
        compare: (a: any, b: any) => a.date - b.date,
        multiple: 6,
      },
    },
    {
      title: "Image",
      dataIndex: "img",
      sorter: {
        compare: (a: any, b: any) => a.img - b.img,
        multiple: 5,
      },
    },
    {
      title: "Product Category",
      dataIndex: "category",
      sorter: {
        compare: (a: any, b: any) => a.category - b.category,
        multiple: 4,
      },
    },
    {
      title: "Product Brand",
      dataIndex: "brand",
      sorter: {
        compare: (a: any, b: any) => a.brand - b.brand,
        multiple: 3,
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 2,
      },
    },
    {
      title: "View",
      dataIndex: "view",
      sorter: {
        compare: (a: any, b: any) => a.view - b.view,
        multiple: 1,
      },
      render: () => (
        <div onClick={()=> navigate("/dashboard/ratings-and-reviews/details")}>
          <p style={{ cursor: "pointer" }}>View</p>
        </div>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      sn: "1",
      date: "1/4/2022 6:33am",
      img: Samsung,
      category: "Mobile Phones",
      brand: "Samsung",
      name: "Samsung S22 Ultra"
    },
    {
      key: "2",
      sn: "2",
      date: "1/4/2022 6:33am",
      img:Dell,
      category: "Laptops",
      brand: "Dell",
      name: "Dell XPS 9305"
    },
    {
      key: "3",
      sn: "3",
      date: "1/4/2022 6:33am",
      img:AppleCharger,
      category: "Mobile Phones Accessories",
      brand: "Apple",
      name: "Apple Phone Charger"
    },
    {
      key: "4",
      sn: "4",
      date: "1/4/2022 6:33am",
      img:LaptopCharger,
      category: "Laptop Accessories",
      brand: "Hp",
      name:"Hp Laptop Charger"
    },
    
  ];
  
  const onChange = ({ pagination, filters, sorter, extra }: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = ({ newSelectedRowKeys }: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="outlet-table">
      <div className="filter">
        <div className="search">
          <Input
            type="text"
            label=""
            placeholder="Search"
            withFlag
            leftIcon={searchIcon}
          />
        </div>
        <div className="date">
          <Input label="" type="date" placeholder="Select Date" />
        </div>
        <Button label="FILTER" variant="orange" />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
};

export default DeviceRatings;
