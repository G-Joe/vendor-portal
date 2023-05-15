import { useState } from "react";
import { Modal } from "antd";
import { Table } from "antd";
import Naira from "assets/icons/naira_small.svg";
import useDisclosure from "components/Modal/useDisclosure";
import StatusModal from "components/Modal/StatusModal";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Select from "components/Input/Select";
import searchIcon from "assets/icons/search_icon.svg";
import "./product_mgt.scss";

const Products = () => {
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
      title: "Product Category",
      dataIndex: "category",
      sorter: {
        compare: (a: any, b: any) => a.category - b.category,
        multiple: 5,
      },
    },
    {
      title: "Product Brand",
      dataIndex: "brand",
      sorter: {
        compare: (a: any, b: any) => a.brand - b.brand,
        multiple: 4,
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 3,
      },
    },
    {
      title: "Total Amount",
      dataIndex: "amount",
      sorter: {
        compare: (a: any, b: any) => a.amount - b.amount,
        multiple: 2,
      },
    },
    {
      title: "Edit Product",
      dataIndex: "edit",
      sorter: {
        compare: (a: any, b: any) => a.edit - b.edit,
        multiple: 1,
      },
      render: () => (
        <div onClick={() => setModalOpen(true)}>
          <p style={{ cursor: "pointer" }}>Edit</p>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sn: "1",
      date: "1/4/2022 6:33am",
      category: "Mobile Phones",
      brand: "Samsung",
      name: "Samsung S22 Ultra",
      amount: "₦‎ 500,000",
    },
    {
      key: "2",
      sn: "2",
      date: "1/4/2022 6:33am",
      category: "Laptops",
      brand: "Dell",
      name: " Dell XPS 9305",
      amount: "₦‎ 987,800",
    },
    {
      key: "3",
      sn: "3",
      date: "1/4/2022 6:33am",
      category: "Mobile Phone Accessories",
      brand: "Apple",
      name: "Apple Phone Charger",
      amount: "₦‎ 10,000",
    },
    {
      key: "4",
      sn: "4",
      date: "1/4/2022 6:33am",
      category: "Laptops Accessories",
      brand: "HP",
      name: "HP Laptop Charger",
      amount: "₦‎ 20,000",
    },
  ];

  const onChange = ({ pagination, filters, sorter, extra }: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const statusModal = useDisclosure();
  const confirmModal = useDisclosure();

  const SuccessModal = () => {
    setModalOpen(false);
    statusModal.onOpen();
  };

  const Deactivate = () => {
    setModalOpen(false);
  };
  const onSelectChange = ({ newSelectedRowKeys }: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="product-table">
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
      <div className="modal">
        <Modal
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          className="edit-product-modal"
        >
          <h3>Edit Product</h3>
          <br />
          <div className="form">
            <Select label="Product Category">
              <option></option>
            </Select>
            <br />
            <Select label="Product Brand">
              <option></option>
            </Select>
            <br />
            <Select label="Product Name">
              <option></option>
            </Select>
            <br />
            <Input label="Amount" type="text" leftIcon={Naira} withFlag />
            <br />
            <Input label="Unit" type="text" />
            <br />
          </div>

          <div className="edit-submit">
            <Button label="SAVE" variant="primary" onClick={SuccessModal} />
            <Button label="CANCEL" variant="secondary" onClick={Deactivate} />
          </div>
        </Modal>
      </div>
      <StatusModal
        status="success"
        title="Successful"
        message="Product was successfully Updated"
        duration={6000}
        isOpen={statusModal.isOpen}
        onClose={statusModal.onClose}
      />
    </div>
  );
};

export default Products;
