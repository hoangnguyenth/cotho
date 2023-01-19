import React from 'react'
import { Box, Button, ImageList, TextField } from '@mui/material'

const Home = () => {
    return (
        <Box>
            <Box sx={{display: "flex",
            flexDirection: "row",
            height: "100px",
            border: '3px solid DodgerBlue',
            alignItems: "center",
            justifyContent: "right"
            }}>
                <ImageList></ImageList>
                <TextField label='Nhập tên thật'  variant='outlined' />
                <TextField label='Nhập tên FaceBook'  variant='outlined' />
                <TextField label='Nhập địa chỉ'  variant='outlined' />
                <Button variant='contained' size='large' sx={{height: "50px", m: "25px"}}>Đăng kí</Button>
            </Box>
            <Box>
                
            </Box>
        </Box>
)}
export default Home