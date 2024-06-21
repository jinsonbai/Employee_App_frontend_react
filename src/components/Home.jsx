import { Box, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    },[])
  return (
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='center'>ID</TableCell>
                    <TableCell align='center'>Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item)=>(
                <TableRow
                    key={item.name}>
                    <TableCell align='center'>{item.id}</TableCell>
                    <TableCell align='center'>{item.name}</TableCell>
                    <TableCell align='center'>{item.email}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        
    </TableContainer>
  )
}

export default Home