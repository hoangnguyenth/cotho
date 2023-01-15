import React from 'react'
import {Avatar, Box, Button, Card} from '@mui/material'

const Home = () => {
    return (
        <Box>
            <Box sx={{display: "flex",
            flexDirection: "row-reverse",
            height: "100px",
            backgroundColor: "DodgerBlue",
            alignItems: "center"
            }}>
                <Button variant='contained' size='large' sx={{height: "50px", m: "25px"}}>Sign in</Button>
            </Box>
            <Box>
                <Avatar src=''></Avatar>
            </Box>
        </Box>
)}
export default Home