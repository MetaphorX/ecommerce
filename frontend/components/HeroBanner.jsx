import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner:{smallText, product, largeText1, image, desc, buttonText, midText}}) => {
  
    return (
    <div className='hero-banner-container'>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h3>{largeText1}</h3>
        <img src={urlFor(image)} alt="headphone"
            className='hero-banner-image'
        />

        <div>
            <Link href={`/product/${product}`}>
            <button type="button"> {buttonText}</button>
            </Link>
            <div className="desc">
                <h5>Description</h5>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner