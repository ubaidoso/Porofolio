import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import downImage from '../../public/down-arrows.png'

const Button = (props) => {


    let iconSrc = '';
  
    if (props.icon) {
      if (props.down) {
        iconSrc = downImage;
      } else {
        iconSrc = rightImage;
      }
    }

  return (
    <Link href={props.link} className={`${props.btnClass} btn`}>
    {props.title}
    {props.icon && (
      <Image src={iconSrc} width={22} height={4} alt={props.down ? "Down Icon" : "Right Icon"} className='ml-1' />
    )}
  </Link>
  )
}

export default Button
