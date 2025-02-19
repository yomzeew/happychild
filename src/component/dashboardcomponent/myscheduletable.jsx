import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState,useEffect} from 'react'
import { getbookbyparentid } from '../../endpoints/apiurl';
import { convertDateFormat } from '../services/timerange';


export default function BasicTable() {
  const [errormsg,seterrormsg]=useState('')
  const [rows,setrows]=useState([])
  const getrowdata=async()=>{
    try{
      const token = localStorage.getItem('token');
      if (!token) {
          seterrormsg('Token not found');
          return;
      }
      const response=await axios.post(getbookbyparentid,null,{
        headers:{
          'authorization':`Bearer ${token}`
        }
      })
      setrows(response.data.data)
      console.log(response.data.data)


    }
    catch(error){

    }
  }
  useEffect(()=>{
    getrowdata()

  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date of Appointment</TableCell>
            <TableCell align="right">Check In</TableCell>
            <TableCell align="right">Check Out</TableCell>
            <TableCell align="right">No of Hours</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Amount(GBP)</TableCell>
            <TableCell align="right">No of Days</TableCell>
            <TableCell align="right">Payment Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.child_fullname}
              </TableCell>
              <TableCell align="right">{convertDateFormat(row.created_at)}</TableCell>
              <TableCell align="right">{convertDateFormat(row.checkin)}</TableCell>
              <TableCell align="right">{convertDateFormat(row.checkout)}</TableCell>
              <TableCell align="right">{row.timeslots.length}</TableCell>
              <TableCell align="right">{row.phonenumber||'null'}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.schedulepattern}</TableCell>
              <TableCell align="right">{row.payment_status===0?<span className='text-red-500'>Not yet Paid</span>:<span>Paid</span>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
