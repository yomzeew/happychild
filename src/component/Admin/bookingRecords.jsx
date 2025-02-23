import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button,Popconfirm } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import { getAllbooking } from "../../fetchdata/fetchdata";

const BookingRecord=()=>{
  const [data,setdata]=useState([])
  const getAllbookfun=async()=>{
          const response=await getAllbooking()
          if(response.success){
              console.log(response.data)
              setdata(response.data[0])
          }
          else{
              console.log(response.message)
          }
      }
      useEffect(()=>{
        getAllbookfun()

      },[])
    return(
        <>
        <div className="h-full w-full px-10 py-10 overflow-y-auto">
        <div className="text-3xl potta-one-regular text-bluecolor">Booking Record</div>
        <div className="mt-5 w-full overflow-x-auto">
        <TableComponent data={data}/>
        </div>
        

        </div>
       
        </>
    )
}
export default BookingRecord

const TableComponent = ({ data }) => {
  // Search text state
  const [searchText, setSearchText] = useState("");
  const [dataSource, setDataSource] = useState([]);

  // Transform incoming data whenever it changes
  useEffect(() => {
    if (!data) return;
    // If data is not an array, wrap it in one.
    const initialData = Array.isArray(data) ? data : [data];
    const transformedData = initialData.map((item) => ({
      ...item,
      key: item.id,
      parentName: item.parent_fullname,
      childName: item.child_fullname,
      phoneNumber: item.phonenumber,
      checkIn: item.checkin,
      timeSlots: item.timeslots, // expecting an array
      schedulePattern: item.schedulepattern,
      amount: item.amount,
      paymentStatus: item.payment_status === 1 ? "Paid" : "Unpaid",
      regDate: item.created_at,
    }));
    setDataSource(transformedData);
  }, [data]);

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
      onFilter: (value, record) =>
        record.parentName.toLowerCase().includes(value.toLowerCase()),
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
      render: (text) => text ? new Date(text).toISOString().split("T")[0] : "",
    },
    {
      title: "Time Slots",
      dataIndex: "timeSlots",
      key: "timeSlots",
      render: (slots) => Array.isArray(slots) ? slots.join(", ") : slots,
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
      render: (status) => (
        <span style={{ color: status === "Paid" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
      title: "Reg_Date",
      dataIndex: "regDate",
      key: "regDate",
      render: (text) => text ? new Date(text).toISOString().split("T")[0] : "",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm title="Are you sure to delete?" onConfirm={() => setDataSource(prev => prev.filter(item => item.key !== record.key))}>
          <Button type="link" style={{ color: "red" }}>
            <EditOutlined /> Update Payment
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <Input
        placeholder="Search by parent name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Table
        columns={columns}
        dataSource={dataSource.filter((item) =>
          item.parentName.toLowerCase().includes(searchText.toLowerCase())
        )}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};


