import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, NewPost, Messages) {
  return { name, NewPost, Messages};
}



const rows = [
  createData('Nathan Aruna Junior', 2, 5),
  createData('Nathan Aruna Senior ', 2, 5),
  createData('Nathan Aruna',2, 5),
  createData('Nathan Aruna', 2, 5),
  createData('Nathan Aruna', 2, 5),
];

export default function Friends() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>*UserName* Friends's</TableCell>
            <TableCell align="right">New Post</TableCell>
            <TableCell align="right">New Messages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Messages}</TableCell>
              <TableCell align="right">{row.NewPost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
