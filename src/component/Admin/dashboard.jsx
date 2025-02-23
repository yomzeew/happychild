import React, { use, useEffect, useState } from "react";
import { Table, Input, Space, Button, Popconfirm } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import { getAllchildrec, getAllUser } from "../../fetchdata/fetchdata";
const DashboardHomeAdmin=()=>{
const [dataparent, setdataparent]=useState([])
const [datachildren,setdatachildren]=useState([])

const getAlluserfun=async()=>{
        const response=await getAllUser()
        if(response.success){
            console.log(response.data)
            setdataparent(response.data)
        }
        else{
            console.log(response.message)
        }
    }
    const getAllchildfun=async()=>{
      const response=await getAllchildrec()
      if(response.success){
          console.log(response.data)
          setdataparent(response.data)
      }
      else{
          console.log(response.message)
      }
  }
    useEffect(()=>{
        getAlluserfun()
        getAllchildfun()
    },[])
    return(
        <>
        <div className="h-full w-full px-10 py-10 overflow-y-auto">
            <ParentRecord data={dataparent}/>
            <ChildRecord data={datachildren}/>
        </div>
        </>
    )
}
export default DashboardHomeAdmin

const ParentRecord=({data})=>{
    return(
        <>
        <div>
            <div className="text-3xl potta-one-regular text-bluecolor my-5">Parent Records</div>
            <ParentTableComponent data={data}/>
        </div>
        </>
    )
}
const ChildRecord=({data})=>{
    return(
        <div>
            <div className="text-3xl potta-one-regular text-bluecolor my-5">Child Records</div>
            <ChildTableComponent data={data}/>
        </div>
    )
}



const ParentTableComponent = ({data}) => {
  // Search text state
  const [searchText, setSearchText] = useState("");

  // Table Data
  const [dataSource, setDataSource] = useState(data);

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


const ChildTableComponent = ({data}) => {
  // Search text state
  const [searchText, setSearchText] = useState("");

  // Table Data
  const [dataSource, setDataSource] = useState(data);

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

