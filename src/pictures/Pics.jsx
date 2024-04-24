import React from 'react';
import Grid from '@mui/material/Grid';
import Lightbox from 'yet-another-react-lightbox'; // Update import statement
import "yet-another-react-lightbox/styles.css" // Correct import for CSS styles
import PhotoAlbum from 'react-photo-album';
import photos from './Pictures'

function Pics() {
    const [open, setOpen] = React.useState(false);
  
   
  return (
    <Grid container maxWidth={'80%'} margin={'auto'}>
        <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
            Pictures
        </div>

        <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={12}>
            <PhotoAlbum onClick={() => setOpen(true)} layout="rows" photos={photos} />
        </Grid>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        // animation={}
        slides={[
          {
            src: require("../constant/images/2.jpg"),
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: require("../constant/images/2.jpg"), width: 320, height: 213 },
              { src: require("../constant/images/2.jpg"), width: 640, height: 427 },
              { src: require("../constant/images/2.jpg"), width: 1200, height: 800 },
              { src: require("../constant/images/2.jpg"), width: 2048, height: 1365 },
              { src: require("../constant/images/2.jpg"), width: 3840, height: 2560 },
            ],
          },
          // ...
        ]}
      />
                
        </Grid>
        <div>
            hello world
        </div>
    </Grid>
  )
}

export default Pics
