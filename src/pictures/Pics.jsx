import React from 'react'
import Grid from '@mui/material/Grid';
import PhotoAlbum from "react-photo-album";
// import Photos from './Pictures'

function Pics() {
    const photos = [
        { src: '../constant/images/2.jpg', width: 800, height: 600 },
        { src:'../constant/images/2.jpg', width: 1600, height: 900 },
      ];
    // const photos = [
    //     {
    //       src:require('../constant/images/2.jpg'),
    //       width: 800,
    //       height: 600,
    //       srcSet: [
    //         { src:require('../constant/images/3.jpg'), width: 400, height: 300 },
    //         { src:require('../constant/images/4.jpg'), width: 200, height: 150 },
    //       ],
    //     },
    //     {
    //       src: require('../constant/images/5.jpg'),
    //       width: 1600,
    //       height: 900,
    //       srcSet: [
    //         { src: require('../constant/images/6.jpg'), width: 800, height: 450 },
    //         { src:require('../constant/images/7.jpg'), width: 400, height: 225 },
    //       ],
    //     },
    //   ];
  return (
    <Grid container maxWidth={'80%'} margin={'auto'}>
        <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
            Pictures
        </div>

        <Grid container>
            <PhotoAlbum layout="rows"
                photos={[
                    {
                    src: "../constant/images/2.jpg",
                    width: 800,
                    height: 600,
                    href: "https://react-photo-album.com/",
                    },
                ]} />
        </Grid>
        <div>
            hello world
        </div>
    </Grid>
  )
}

export default Pics
