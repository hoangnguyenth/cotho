import React from 'react'
import { Box, Button, TextField, Card, CardMedia, Typography} from '@mui/material'
import products from '../images/products'
import logo from './logo.png'

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
                <Box sx={{display: "flex", flexDirection: 'row', width: "50%", justifyContent: "center"}}>
                    <img src={logo} />
                </Box>
                <TextField label='Nhập tên thật'  variant='outlined' />
                <TextField label='Nhập tên FaceBook'  variant='outlined' />
                <TextField label='Nhập địa chỉ'  variant='outlined' />
                <Button variant='contained' size='large' sx={{height: "50px", m: "25px"}}>Đăng kí</Button>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row"}}>
                {products.map((item, index) => <Card key={index} sx={{alignItems: "center", justifyContent: "center", border: "1.5px dashed black", margin: 5, width: 200}} >
                    <Box sx={{width: 100, height: 100}}>
                        <img src={item.img}></img>
                    </Box>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h6">{item.price}k/hộp</Typography>
                    <TextField variant="outlined" type="number" label="Số hộp"></TextField>
                    <Button variant='contained'>Thêm vào giỏ</Button>
                </Card>)}
            </Box>
        </Box>
)}
export default Home