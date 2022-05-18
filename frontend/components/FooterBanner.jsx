import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({FooterBanner}) => {
  return (
    <div className='footer-banner-container'>
        <div className="banner-desc">
            <div className="left">
                <p>{FooterBanner.discount}</p>
                <p>{FooterBanner.largeText1}</p>
            </div>
            <div className="right"></div>
        </div>

    </div>
  )
}

export default FooterBanner