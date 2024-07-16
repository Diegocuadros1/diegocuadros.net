"use client"

import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Homegrid = () => {

  return (
    <section id='about'>
      <div className='flex justify-center items-center'>
        <h1 className="text-white font-bold text-[40px] md:text-[50px] p-10 z-50">About <span className="text-purple">Me</span></h1>
      </div>
      
      <BentoGrid>
        
        {gridItems.map((item) => (
          
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
              
            />
        ))} 
      </BentoGrid>
    </section>
  )
}

export default Homegrid
