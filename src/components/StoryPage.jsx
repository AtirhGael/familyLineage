
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function StoryPage() {
  const param = useLocation()
  const data = param.state
  console.log('====================================');
  console.log(data[3][0].name);
  console.log('====================================');
  return (
    <div>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img class="mr-4 w-20 h-20 rounded-full" src={data[2]} alt="Jese Leos"/>
                    <div>
                      <a href="#" rel="author" class="text-xl text-white ">{data[3][0].name}</a>
                      {/* <p class="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p> */}
                      <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                    </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl dark:text-white">{data[0]}</h1>
              <p class="text-base text-gray-500 dark:text-gray-400">{data[1]}</p>
            </header>
      </article>
      </div>
      </main>
    </div>
  )
}
