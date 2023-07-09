import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Sidebar from './Sidebar';
import Videos from './Videos';




const Feed = () => {
    const [selectedCategory, setselectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);


    return (
        <Stack
            sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setselectedCategory={setselectedCategory}
                />
                <Typography className='copyright'
                    variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2022 Rahul Media
                </Typography>
            </Box>

            <Box p={2} sx={{
                overflow: 'auto',
                height: '90vh', fkex: 2
            }} >
                <Typography variant='h5'
                    fontWeight='bold' mb={2}
                    sx={{ color: 'white' }}
                >
                    {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
