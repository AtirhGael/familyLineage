import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { family } from '../assets/images'

const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <span className='text-[#915eff]'>Bumaha's family</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            your online gateway to explore and celebrate the rich tapestry of our family's history and legacy. Whether you're a member of our extended family or a curious visitor, we invite you to embark on a journey through generations past, present, and future.
            </p>
          </div>
              
        </div>
        <div className='relative  justify-center top-[360px] hidden sm:flex max-auto flex    '>
          <img src={family} alt='family' className='w-[40%] h-[6%] object-contain'/>
        </div>
          {/* <ComputersCanvas/> */}
          
          <div className='absolute xs:buttom-10 bottom-5 w-full flex justify-center item-center'>
            <a href='#heritage'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y:[0,24,0]
                  }}
                  transition={{
                    duration:1.5,
                    repeat:Infinity,
                    repeatType:'loop'
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
    </section>
  )
}

export default Hero 