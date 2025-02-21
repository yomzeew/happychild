import React, { useState } from "react";
import { Table, Input, Space, Button, Popconfirm } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
const DashboardHomeAdmin=()=>{
    return(
        <>
        <div className="h-full w-full px-10 py-10 overflow-y-auto">
            <ParentRecord/>
            <ChildRecord/>


        </div>
        </>
    )
}
export default DashboardHomeAdmin

const ParentRecord=()=>{
    return(
        <>
        <div>
            <div className="text-3xl potta-one-regular text-bluecolor my-5">Parent Records</div>
            <ParentTableComponent/>
        </div>
        </>
    )
}
const ChildRecord=()=>{
    return(
        <div>
            <div className="text-3xl potta-one-regular text-bluecolor my-5">Child Records</div>
            <ChildTableComponent/>
        </div>
    )
}



const ParentTableComponent = () => {
  // Search text state
  const [searchText, setSearchText] = useState("");

  // Table Data
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      id: 1,
      parentName: "",
      childName: "Oluwasuyi Miracle",
      age: 5,
      ageGroup: "3-5 years",
      dateOfBirth: "2018-12-02",
      gender: "Male",
    },
    {
      key: "3",
      id: 3,
      parentName: "Aisha Afolabi",
      childName: "Ibrahim Fareedah",
      age: 5,
      ageGroup: "3-5 years",
      dateOfBirth: "2018-05-09",
      gender: "Female",
    },
    {
      key: "4",
      id: 4,
      parentName: "Aisha Afolabi",
      childName: "Ibrahim Fareedah",
      age: 5,
      ageGroup: "3-5 years",
      dateOfBirth: "2018-05-09",
      gender: "Female",
    },
  ]);

  // Handle Delete Action
  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  // Table Columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Parent Name",
      dataIndex: "parentName",
      key: "parentName",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Parent"
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
      title: "Child Name",
      dataIndex: "childName",
      key: "childName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Age Group",
      dataIndex: "ageGroup",
      key: "ageGroup",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(record.key)}>
          <Button type="link" style={{ color: "red" }}>
            <DeleteOutlined /> Delete
          </Button>
        </Popconfirm>
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


const ChildTableComponent = () => {
  // Search text state
  const [searchText, setSearchText] = useState("");

  // Table Data
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      id: 1,
      fullName: "Yomzeew",
      phoneNumber: "080000000",
      email: "yomzeew@gmail.com",
      address: "Lagos",
      occupation: "Graphics",
      noOfChildren: 1,
    },
    {
      key: "2",
      id: 2,
      fullName: "Null Null",
      phoneNumber: "null",
      email: "lawsonmultimedia@gmail.com",
      address: "null",
      occupation: "null",
      noOfChildren: 0,
    },
    {
      key: "3",
      id: 3,
      fullName: "Null Null",
      phoneNumber: "null",
      email: "Afolabaisha2@gmail.com",
      address: "null",
      occupation: "null",
      noOfChildren: 0,
    },
  ]);

  // Handle Delete Action
  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  // Table Columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
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
      onFilter: (value, record) => record.fullName.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Email"
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
      onFilter: (value, record) => record.email.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
    {
      title: "No of Children",
      dataIndex: "noOfChildren",
      key: "noOfChildren",
      sorter: (a, b) => a.noOfChildren - b.noOfChildren,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(record.key)}>
          <Button type="link" style={{ color: "red" }}>
            <DeleteOutlined /> Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-white">
        <Table
      columns={columns}
      dataSource={dataSource.filter((item) =>
        item.fullName.toLowerCase().includes(searchText.toLowerCase())
      )}
      pagination={{ pageSize: 5 }}
      bordered
    />

    </div>
    
  );
};

