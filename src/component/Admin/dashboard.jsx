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
            setdataparent(response.data[0])
        }
        else{
            console.log(response.message)
        }
    }
    const getAllchildfun=async()=>{
      const response=await getAllchildrec()
      if(response.success){
          console.log(response.data)
          setdatachildren(response.data[0])
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



const ParentTableComponent = ({ data }) => {
  console.log(data, "dddd");

  // Search text state
  const [searchText, setSearchText] = useState("");
  // Table Data state
  const [dataSource, setDataSource] = useState([]);

  // Update dataSource when data prop changes
  useEffect(() => {
    if (!data) return;
    // If data is not an array, wrap it in one
    const initialData = Array.isArray(data) ? data : [data];
    // Transform each item by adding a key and computing parentName
    const transformedData = initialData.map((item) => ({
      ...item,
      key: item.id,
      parentName: `${item.firstname || ""} ${item.lastname || ""}`.trim(),
    }));
    setDataSource(transformedData);
  }, [data]);

  // Handle Delete Action
  const handleDelete = (key) => {
    setDataSource((prevData) => prevData.filter((item) => item.key !== key));
  };

  // Table Columns matching the provided parent data keys
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
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
              size="small"
            >
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
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
      title: "No. of Children",
      dataIndex: "number_of_children",
      key: "number_of_children",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <Button type="link" style={{ color: "red" }}>
            <DeleteOutlined /> Delete
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
const ChildTableComponent = ({ data }) => {
  console.log(data, "checkagaing");

  // Search text state
  const [searchText, setSearchText] = useState("");
  // Table Data state
  const [dataSource, setDataSource] = useState([]);

  // Ensure data is properly formatted and update state
  useEffect(() => {
    if (!data) return; // Ensure data exists
    const initialData =data;

    const transformedData = initialData.map((item) => ({
      ...item,
      key: item.id || Math.random(), // Ensure each row has a unique key
      fullName: `${item.firstname || ""} ${item.lastname || ""}`.trim(), // Prevent undefined values
    }));

    setDataSource(transformedData);
  }, [data]);

  // Handle Delete Action
  const handleDelete = (key) => {
    setDataSource((prevData) => prevData.filter((item) => item.key !== key));
  };

  // Table Columns (without separate firstname and lastname)
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
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Age Group",
      dataIndex: "agegroup",
      key: "agegroup",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Assistance",
      dataIndex: "assistance",
      key: "assistance",
    },
    {
      title: "Parent",
      dataIndex: "parent_fullname",
      key: "parent_fullname",
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
      <Input
        placeholder="Search by full name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
      />
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


