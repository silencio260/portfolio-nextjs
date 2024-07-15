import { projects } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map((project) => (
                <div className={`sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center 
                justify-center sm:w-[570px] w-[80vw]`}>
                    <PinContainer title={project.link} href={project.link}>
                        <div className={`relative flex items-center justify-center 
                           sm:w-[570px] sm-w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10`}>
                            <div className={`relative w-full h-full overflow-hidden
                            lg:rounded-3xl bg-[#13162d]`}>
                                <img 
                                    src='/bg.png'
                                    alt='bg-img'
                                />
                            
                            <img 
                                src={project.img}
                                alt={project.title}
                                className='z-10 absolute bottom-0'
                            />
                        </div>

                        </div>

                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {project.des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className='flex items-center'>
                                {project.iconLists.map((icon, index) => (
                                    <div key={icon}
                                        className={`flex justify-center items-center 
                                        rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 
                                        border border-white/[0.2]`}
                                        style={{transform: `translateX(-${5 * index * 2}px)`}}
                                    >
                                        <img src={icon} alt={icon} 
                                            className='p-2'
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm'>
                                    Check Live Site
                                </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>

                            </div>

                        </div>
                    </PinContainer> 
                </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProjects