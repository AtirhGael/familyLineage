import React, { useState } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';



function Pics() {
  const [images, setImages] = useState([
    require("../constant/images/2.jpg"),
    require("../constant/images/8.jpg"),
    require("../constant/images/gael.jpg"),
    require("../constant/images/4.jpg"),
    require("../constant/images/gael.jpg"),
    require("../constant/images/5.jpg"),
    require("../constant/images/7.jpg"),
    require("../constant/images/8.jpg"),
    require("../constant/images/9.jpg"),
    // Add more image URLs as needed
  ]);

   
  return (
    <Grid container maxWidth={'80%'} margin={'auto'}>
        <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white py-10'>
            Pictures Gallery
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                <p className="text-white">Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
    </Grid>
  )
}

export default Pics
