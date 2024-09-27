import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import { BlogPosts } from "../constants";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  index,
  title,
  story,
  tags,
  image,
}) => {

  const navigate = useNavigate()

  const data = [title,story,image,tags]
  const openModal = () => {
    navigate('/story', {state:data})
  };

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={openModal} 
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{title}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{story.substring(0, 100)}...</p> 
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${title}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const BlogPost = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Write down a story or family lesson you will want to be passed on and never forgotten for the next generations
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {BlogPosts.map((project, index) => (
        <BlogCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(BlogPost, "blogPost");