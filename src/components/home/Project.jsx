import React from 'react'
import { useState } from 'react'

import Title from '@/layout/title'

import portf_aby from '@/assets/img/abyditya-web.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Project({ }) {
    return (
        <>
            <div className="container">
                <Title number="#002" title="projects" />
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <motion.div whileHover={{ scale: 1.05 }} className='card'>
                            <motion.span layout="position">
                                <Image src={portf_aby} alt="portfolio" />
                            </motion.span>
                            <motion.div className='card-body'>
                                <motion.h5 layout="position" className='card-title'><span>portfolio</span></motion.h5>
                                <motion.p layout="position" className='card-text'>my first portfolio project with NextJS, Bootstrap, And FramerMotion, created a simple & clean design</motion.p>
                                <motion.span className='badg'>Next.JS</motion.span>
                                <motion.span className='badg'>Bootstrap</motion.span>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div whileHover={{ scale: 1.05 }} className='card'>
                            <motion.span layout="position">
                                <Image src={portf_aby} alt="portfolio" />
                            </motion.span>
                            <motion.div className='card-body'>
                                <motion.h5 layout="position" className='card-title'><span>codelab</span></motion.h5>
                                <motion.p layout="position" className='card-text'>planning to make a basic web development learning site with NextJS, but this project is not done yet</motion.p>
                                <motion.span className='badg'>Next.JS</motion.span>
                                <motion.span className='badg'>Firebase</motion.span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
