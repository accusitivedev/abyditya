import React from 'react'

export default function Title({ number, title }) {
  return (
    <div className="row text-center mb-3">
      <div className="col" data-aos="fade-right">
        <h2 className='dividerTitle'><span>{number}</span>{title}</h2>
      </div>
    </div>
  )
}
