import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
// import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { FamilyGalery, ima, img2 } from '../assets/images'

const gael = '../assets/images/gael.jpg'

const Gallery = () => {
  return (
    < >
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Our Picture Gallery</h2>
      </motion.div>
   
      <div className='mt-20 flex flex-wrap gap-10'>
        {FamilyGalery.map((service,id)=>(
          <Tilt className='sm:w-[250px] w-full' key={id} >
            <motion.div variants={fadeIn("right","spring",0.5*id,0.75)} 
            className='w-fill green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
              <div options={{
                max:45,
                scale:1,
                speed:450
              }}
              className='bg-tertiary rounded-[20px] py-5 px12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <img src={service} alt='iconImg' className='w-[100%] h-[100%] object-contain' />
                {/* <h3 className='text-white text=[20px]'>{service.title} </h3> */}
              </div> 
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Gallery,'gallery')