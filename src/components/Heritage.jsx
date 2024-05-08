import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences,childrens } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { grandpa } from '../assets/images'

const Heritage = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}> Our Family Heritage.</h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
     <div className='flex flex-col mx-auto items-center'>
        <div className={styles.heroSubText}>Head of the family</div>
        <div className='border bg-tertiary p-1 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={grandpa} className='w-full h-full object-cover rounded-2xl' alt='Grandpa' />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100'>
            <span className='text-white text-lg text-center'>
              Tanyi Mutsu And Manyi Lum both gave birth to 9 children
            </span>
          </div>
        </div>
      </div>
     </div>
      <VerticalTimeline>
        {childrens.map((item,id)=>(
          <VerticalTimelineElement key={id}
          contentStyle={{ background:'#1d1836',color:'#fff'}}
          contentArrowStyle={{ borderRight:'7px solid #232631' }}
          date={item.date}
          iconStyle={{ background:item.iconBg}}
          icon={
          <div className= 'flex w-full h-full justify-center items-center'>
            <img src={item.image} alt={item.company_name} className='w-[100%] h-[100%] object-contain rounded-full '/>
          </div>}
          >
            <div>
              <h3 className='text-white text-[24px]'>{item.child}</h3>
              <p className='text-secondary text-[16px] font-semibold'>Married to : <span className='text-white text-[18px]'>{item.married_to}</span></p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {item.children.map((items,id)=>(
                <li key={id}>
                  {items}
                </li>
              ))}
            </ul>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
   </>
  )
}

export default SectionWrapper(Heritage,'heritage') 