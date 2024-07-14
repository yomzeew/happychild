import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id,name, dateofappoint, checkin, checkout, nameofcaregiver,phonenumber) {
  return {id, name, dateofappoint, checkin, checkout, nameofcaregiver,phonenumber };
}

const rows = [
  createData(1,'Ade tola', '1st June 2021', '10:00am', '11:00am', 'Olatayo Seun','23481773839'),
  createData(2,'Ade tola', '1st June 2021', '10:00am', '11:00am', 'Olatayo Seun','23481773839'),
  createData(3,'Ade tola', '1st June 2021', '10:00am', '11:00am', 'Olatayo Seun','23481773839'),
  createData(4,'Ade tola', '1st June 2021', '10:00am', '11:00am', 'Olatayo Seun','23481773839'),
  createData(5,'Ade tola', '1st June 2021', '10:00am', '11:00am', 'Olatayo Seun','23481773839'),
  createData(6,'Ade tola', '1st June 2021', '10:00am', '11:00am', 'Olatayo Seun','23481773839'),

];

export default function BasicTable() {
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
            <TableCell align="right">Name of Care Giver</TableCell>
            <TableCell align="right">Phone Number</TableCell>
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
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dateofappoint}</TableCell>
              <TableCell align="right">{row.checkin}</TableCell>
              <TableCell align="right">{row.checkout}</TableCell>
              <TableCell align="right">{row.nameofcaregiver}</TableCell>
              <TableCell align="right">{row.phonenumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
