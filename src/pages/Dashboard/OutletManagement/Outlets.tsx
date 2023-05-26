import { useState } from "react";
import { Modal } from "antd";
import { Table } from "antd";
import useDisclosure from "components/Modal/useDisclosure";
import ConfirmModal from "components/Modal/ConfirmModal";
import StatusModal from "components/Modal/StatusModal";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Select from "components/Input/Select";
import searchIcon from "assets/icons/search_icon.svg";

const OutletOrders = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
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
      title: "Outlet Name",
      dataIndex: "outlet",
      sorter: {
        compare: (a: any, b: any) => a.outlet - b.outlet,
        multiple: 5,
      },
    },
    {
      title: "Outlet Phone number",
      dataIndex: "outletPhone",
      sorter: {
        compare: (a: any, b: any) => a.outletPhone - b.outletPhone,
        multiple: 4,
      },
    },
    {
      title: "Outlet Office Address",
      dataIndex: "outletOffice",
      sorter: {
        compare: (a: any, b: any) => a.outletOffice - b.outletOffice,
        multiple: 3,
      },
    },
    {
      title: "Outlet State",
      dataIndex: "outletState",
      sorter: {
        compare: (a: any, b: any) => a.outletState - b.outletState,
        multiple: 2,
      },
    },
    {
      title: "Edit Outlet",
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
      outlet: "Jumia Store, Ikeja",
      outletPhone: "08096789657",
      outletOffice: "No 17. Harmony enclave, Ikeja",
      outletState: "Lagos State",
    },
    {
      key: "2",
      sn: "2",
      date: "1/4/2022 6:33am",
      outlet: "Jumia Store, Ikeja",
      outletPhone: "08096789657",
      outletOffice: "No 17. Harmony enclave, Ikeja",
      outletState: "Lagos State",
    },
    {
      key: "3",
      sn: "3",
      date: "1/4/2022 6:33am",
      outlet: "Jumia Store, Ikeja",
      outletPhone: "08096789657",
      outletOffice: "No 17. Harmony enclave, Ikeja",
      outletState: "Lagos State",
    },
    {
      key: "4",
      sn: "4",
      date: "1/4/2022 6:33am",
      outlet: "Jumia Store, Ikeja",
      outletPhone: "08096789657",
      outletOffice: "No 17. Harmony enclave, Ikeja",
      outletState: "Lagos State",
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
    confirmModal.onOpen();
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
      <div className="modal">
        <Modal
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          className="create-outlet-modal"
        >
          <h3>Edit Outlet</h3>
          <br />
          <div className="topper">
            <div className="left">
              <Input label="Outlet Name" type="text" />
              <br />
              <Input label="Outlet Phone Number" type="text" />
              <br />
              <Input label="Outlet Email Address" type="text" />
              <br />
            </div>
            <div className="right">
              <Select
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                onOptionSelected={handleOptionSelected}
                label="Select Outlet State"
              />
              <br />
              <Select
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                onOptionSelected={handleOptionSelected}
                label="Select Outlet Location"
              />

              <br />
              <Select
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                onOptionSelected={handleOptionSelected}
                label="Outlet Address"
              />
            </div>
            <br />
          </div>
          <h3 className="details">Details of Agent in Charge of Outlets</h3>
          <br />
          <div className="bottom">
            <div className="left">
              <Input label="Name of Agent in Charge of Outlet" type="text" />
            </div>
            <div className="right">
              <Input label="Agent Phone Number" type="text" />
            </div>
          </div>
          <br />
          <Select
            options={["Option 1", "Option 2", "Option 3", "Option 4"]}
            onOptionSelected={handleOptionSelected}
            label="Status"
          />

          <br />
          <div className="edit-submit">
            <Button label="UPDATE" variant="primary" onClick={SuccessModal} />
            <Button
              label="DEACTIVATE"
              variant="secondary"
              onClick={Deactivate}
            />
          </div>
        </Modal>
      </div>
      <StatusModal
        status="success"
        title="Successful"
        message="you have just updated an outlet"
        duration={6000}
        isOpen={statusModal.isOpen}
        onClose={statusModal.onClose}
      />
      <ConfirmModal
        question2="You are about to deactivate this outlet, please note that this outlet will not be visible to the users for pick up once deactivated. Are you sure you want to carry out this action?"
        confirmSuccessMessage="Outlet Deactivated"
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.onClose}
      />
    </div>
  );
};

export default OutletOrders;
