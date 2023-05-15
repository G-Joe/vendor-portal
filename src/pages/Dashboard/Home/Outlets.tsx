import { useState } from "react";
import { Table } from "antd";
import "./home.scss";

const columns = [
  {
    title: "S/N",
    dataIndex: "sn",
    sorter: {
        compare: (a: any, b: any) => a.sn - b.sn,
        multiple: 6,
      },
  },
  {
    title: "Date Created",
    dataIndex: "date",
    sorter: {
      compare: (a: any, b: any) => a.date - b.date,
      multiple: 5,
    },
  },
  {
    title: "Outlet Name",
    dataIndex: "outlet",
    sorter: {
      compare: (a: any, b: any) => a.outlet - b.outlet,
      multiple: 4,
    },
  },
  {
    title: "Outlet Office Address",
    dataIndex: "address",
    sorter: {
      compare: (a: any, b: any) => a.address - b.address,
      multiple: 3,
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: {
      compare: (a: any, b: any) => a.status - b.status,
      multiple: 2,
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    sorter: {
      compare: (a: any, b: any) => a.action - b.action,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    sn: "1",
    date: "1/2/2023",
    outlet: "Jumia store, Ikeja",
    address: "No 17, Harmony enclave, Ikeja, Lagos state",
    status: "Active",
    action: "Edit",
  },
  {
    key: "2",
    sn: "2",
    date: "2/2/2023",
    outlet: "Jumia store, Ado-Ekiti",
    address: "No 22, Poly road, Ado-Ekiti, Ekiti state",
    status: "Active",
    action: "Edit",
  },
  {
    key: "3",
    sn: "3",
    date: "3/2/2023",
    outlet: "Jumia store, Ketu",
    address: "No 4, Ikorodu road, Ketu, Lagos state",
    status: "Active",
    action: "Edit",
  },
  {
    key: "4",
    sn: "4",
    date: "4/2/2023",
    outlet: "Jumia store, Ibadan",
    address: "No 3, Deniyan Street, Iwo road, Oyo state",
    status: "Active",
    action: "Edit",
  },
];

const onChange = ({pagination, filters, sorter, extra}:any) => {
  console.log("params", pagination, filters, sorter, extra);
};

const OutletTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = ({newSelectedRowKeys}:any) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
  return (
    <div className="outlet-table">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
};

export default OutletTable;
