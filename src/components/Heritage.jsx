import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences, childrens } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { grandpa } from '../assets/images'


const Hover = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Heritage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  const openModal1 = (item) => {
    setSelectedImg(item);
    setIsModalOpen(true);
  };

  const closeModal1 = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Our Family Heritage</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <div className="flex flex-col mx-auto items-center">
        <div className={styles.heroSubText}>Head of the family</div>
        <div className="border bg-tertiary p-1 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img src={grandpa} className="w-full h-full object-cover rounded-2xl" alt="Grandpa" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
              <span className="text-white text-lg text-center">
                Tanyi Mutsu and Manyi Lum both gave birth to 9 children
              </span>
            </div>
          </div>
        </div>
      </div>

      <VerticalTimeline>
        {childrens.map((item, id) => (
          <VerticalTimelineElement
            key={id}
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={item.date}
            iconStyle={{ background: item.iconBg }}
            icon={
              <div className="flex w-full h-full justify-center items-center" onClick={()=>openModal1(item.image)}>
                <img src={item.image} alt={item.child} className="w-full h-full object-contain rounded-full" />
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px]">{item.child}</h3>
              <p
                onClick={() => openModal(item)}
                className="text-secondary text-[16px] font-semibold cursor-pointer"
              >
                Married to: <span className="text-white text-[18px]">{item.married_to}</span>
              </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {item.children.map((child, idx) => (
                <li key={idx} className="text-white text-[16px]">
                  {child}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>

    {selectedItem && (
      <Hover isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl text-black text-center font-semibold mb-4">Spouse's Family</h2>
        <div className="mb-4">
          <p className="text-black text-xl font-semibold">Parents:</p>
          <ul className="list-disc ml-5 space-y-2">
            {selectedItem.spouse_parents.map((parent, idx) => (
              <li key={idx} className="text-black text-[14px] font-semibold">
                {parent}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-black text-xl font-semibold">Siblings:</p>
          <ul className="list-disc ml-5 space-y-2">
            {selectedItem.spouse_siblings.map((sibling, idx) => (
              <li key={idx} className="text-black text-[14px] font-semibold">
                {sibling}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
        >
          Close
        </button>
      </Hover>
    )}
    {selectedImg && (
      <Hover isOpen={isModalOpen} onClose={closeModal1}>
        <h2 className="text-xl text-black text-center font-semibold mb-4"> Family Photo</h2>
        <img src={selectedImg} className='w-full max-h-[500px]'/>
        <button
          onClick={closeModal1}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
        >
          Close
        </button>
      </Hover>
    )}
  </>
  )
}

export default SectionWrapper(Heritage, 'heritage') 