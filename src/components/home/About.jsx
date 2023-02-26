import React from 'react'
import Title from '@/layout/title'

export default function About() {
    return (
        <>
            <div className="container">
                <Title number="#001" title="About" />
                <div className="row content justify-content-center fs-5">
                    <div className="col-md-5 text-center" data-aos="fade-top">
                        <p>howdy! welcome to my portfolio, my name is abyan raditya, a boy who loves to code & music so much! As a self-taught developer, I started learning web development when I was in 5th grade and its been 3 years! and also have been gradually improving my skills over time.</p>
                    </div>
                    <div className="col-md-5 text-center" data-aos="fade-top">
                        <p>I am passionate about Frontend Development and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
