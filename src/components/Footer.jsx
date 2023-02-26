import React from 'react'
import emoji from '@/assets/img/emoji/smileHeart.png'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <section className="footer text-center">
          <p className="title">Find an issue with this page? <a href="https://github.com/accusitivee/abyditya/tree/main/src/components" target="_blank" rel="noreferrer">Fix it on Github 👈</a></p>
          <p className="title">Copyright © 2023<br />
            Created with <Image src={emoji} alt="emoji" width={20} /> by <a href="https://instagram.com/accusitiv.e" target="_blank" rel="noreferrer">Abyditya</a></p>
          </section>
          </div>
        </footer>
        )
}
