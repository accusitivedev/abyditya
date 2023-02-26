import React from 'react'
import { useState } from 'react'

import Title from '@/layout/title'

import portf_aby from '@/assets/img/abyditya-web.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Project() {
    const [portOne, setPortOne] = useState(false)
    return (
        <>
            <div className="container">
                <Title number="#002" title="projects" />
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <motion.div whileHover={{ scale: 1.05, type: 'spring' }} className='card'>
                            <motion.span layout="position">
                                <Image src={portf_aby} alt="portfolio" />
                            </motion.span>
                            <motion.div className='card-body'>
                                <motion.h5 layout="position" className='card-title'><span>portfolio</span></motion.h5>
                                <motion.p layout="position" className='card-text'>Portfolio website with NextJS, and Bootstrap, & Aos simple & clean design, created by Abyditya</motion.p>
                                <motion.span className='badg'>Next.JS</motion.span>
                                <motion.span className='badg'>Bootstrap</motion.span>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div whileHover={{ scale: 1.02, type: 'spring' }} className='card'>
                            <motion.span layout="position">
                                <Image src={portf_aby} alt="portfolio" />
                            </motion.span>
                            <motion.div className='card-body'>
                                <motion.h5 layout="position" className='card-title'><span>blog</span><span className="soon">Soon</span></motion.h5>
                                <motion.p layout="position" className='card-text'>blog with NextJS, and Bootstrap, & Firebase simple & clean design, created by Abyditya</motion.p>
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
