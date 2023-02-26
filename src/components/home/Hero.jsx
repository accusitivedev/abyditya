import React from 'react'

import mouse from '@/assets/img/mouse.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <h1 className="subtitle mt-1" data-aos="fade-right">Howdy, i&apos;m <br /> <span>abyan raditya</span>.</h1>
                        <p className="description">I hope you will get to know a little bit <br /> about me ☻ scroll down <Image src={mouse} alt="mouse" /></p>
                        <Link href="/contact" className="btn btn-light btn-talk btn-wide"><i
                            className="fa-regular fa-envelope-dot"></i> Let&apos;s Talk!
                        </Link>
                    </div>
                    <div className="col">
                        <section data-aos="fade-down" className="banner"></section>
                    </div>
                </div>
            </div>
        </>
    )
}
