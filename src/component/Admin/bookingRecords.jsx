import React, { useState } from "react";
import { Table, Input, Space, Button } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";

const BookingRecord=()=>{
    return(
        <>
        <div className="h-full w-full px-10 py-10 overflow-y-auto">
        <div className="text-3xl potta-one-regular text-bluecolor">Booking Record</div>
        <div className="mt-5">
        <TableComponent/>
        </div>
        

        </div>
       
        </>
    )
}
export default BookingRecord

const TableComponent = () => {
  // Table Data
  const [searchText, setSearchText] = useState("");

  const dataSource = [
    {
      key: "1",
      id: 1,
      parentName: "Miracle Oluwasuyi",
      childName: "Oluwasuyi",
      phoneNumber: "0810000000",
      checkIn: "21st, August, 2024",
      timeSlots: ["06:00-07:00", "07:00-08:00", "08:00-09:00", "09:00-10:00", "10:00-11:00"].join(", "),
      schedulePattern: 1,
      amount: 10.23,
      paymentStatus: "Paid",
      regDate: "21st, August, 2024",
    },
  ];

  // Table Columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Parent Full Name",
      dataIndex: "parentName",
      key: "parentName",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Name"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button type="primary" onClick={() => confirm()} icon={<SearchOutlined />} size="small">
              Search
            </Button>
            <Button onClick={() => clearFilters()} size="small">
              Reset
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => record.parentName.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Child's Name",
      dataIndex: "childName",
      key: "childName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Check In",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "Time Slots",
      dataIndex: "timeSlots",
      key: "timeSlots",
    },
    {
      title: "Schedule Pattern",
      dataIndex: "schedulePattern",
      key: "schedulePattern",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => <span style={{ color: status === "Paid" ? "green" : "red" }}>{status}</span>,
    },
    {
      title: "Reg_Date",
      dataIndex: "regDate",
      key: "regDate",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button type="link" style={{ color: "red" }}>
          <EditOutlined /> Update Payment
        </Button>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
  <Table
      columns={columns}
      dataSource={dataSource.filter((item) => item.parentName.toLowerCase().includes(searchText.toLowerCase()))}
      pagination={{ pageSize: 5 }}
      bordered
      />

    </div>

  );
};


