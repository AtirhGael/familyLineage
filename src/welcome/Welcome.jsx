import React from 'react';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const img1 = require('../constant/images/family.png')

const Welcome = () => {
  return (
    <Grid maxWidth={'80%'} margin={'auto'}>
        <Grid container spacing={2} sx={{justifyContent:'center',alignItems:"center"}}  >
            <Grid item xs={12} sm={12} md={12} lg={6} >
            <Box>
                <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
                    Dear Visitors, Welcome to [Family Name] Heritage
                </div>
                <div className='py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'>
                    your online gateway to explore and celebrate the rich tapestry of our family's history and legacy. Whether you're a member of our extended family or a curious visitor, we invite you to embark on a journey through generations past, present, and future.
                    {/* At [Family Name] Heritage, we believe that every family has a story worth preserving and sharing. Our mission is to provide a platform where our collective history comes alive through stories, photos, documents, and memories passed down through the ages.
                    As you navigate through our website, you'll discover fascinating tales of triumphs and challenges, cherished traditions, and the bonds that unite us across time and distance. From the earliest ancestors who laid the foundation to the youngest members who carry the torch forward, each individual contributes to the rich mosaic of our family heritage. */}
                    
                </div>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <img src={img1} alt='familyimage' style={{width:'100%',height:600}} />
            </Grid>
        </Grid>
    
        <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white lg:py-20 sm:py-20' >
            Our Family Heritage
        </div>

    </Grid>
  );
};

export default Welcome;
