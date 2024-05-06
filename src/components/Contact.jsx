import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Earth from './canvas/Earth'
const Contact = () => {
  //template_xhazprm
  // service_hfilc7m
  // cHLSrM45b67DHDAxn
const [loading, setloading] = useState(false)
const [messages, setmessages] = useState('')
  const formRef = useRef()
  const [form,sectForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  
  const handlechange = (e) =>{
    
      const {name,value} = e.target;
      sectForm({...form, [name]:value})
  }
  const handlesubmit = (e)=>{
    e.preventDefault()
    setloading(true)
    emailjs.send('service_hfilc7m',
  'template_xhazprm',
  {
    from_name:form.name,
    to_name:'Atirh Gael',
    from_email:form.email,
    to_email:'atirhg@gmail.com',
    message:messages
  },
  'cHLSrM45b67DHDAxn'
  ).then(()=>{
    setloading(false)
    alert('thank you for your message i will get back to you as soon as possible');
    sectForm({
      name:'',
      message:'',
      email:''
    })
  },(error)=>{
    setloading(false)
    console.log(error);
    alert('Something went wrong')
  })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div variants={slideIn('left',"tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.heroHeadText}>Contact</h3>

        <form 
        ref={formRef}
        onSubmit={handlesubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
            type='text'
            name='name'
            value={form.name}
            onChange={handlechange}
            placeholder='what`s your name'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
            type='text'
            name='email'
            value={form.email}
            onChange={handlechange}
            placeholder='what`s your email'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
            rows={7}
            name='massage'
            value={messages}
            onChange={(e)=>setmessages(e.target.value)}
            placeholder='Enter your message'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>

          <button type='submit'
          className='bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading?"sending..." :"send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right',"tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Earth/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")