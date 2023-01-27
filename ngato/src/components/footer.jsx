import React from 'react'
import './footer.css'
import {SiHashnode} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from "react-icons/bs"
import {FiInstagram} from 'react-icons/fi' 
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ngato.com</a>

      <div className='footer__socials'>
      <a href='https://instagram.com/rubangakene97' target="_blank"><FiInstagram/></a>
        <a href='https://hashnode.com' target="_blank"><SiHashnode/></a>
        <a href='https://twitter.com/wongiro' target="_blank"><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Robinson 'Wonjiro' Rubangakene. All rights reserved</small> 
      </div>
    </footer>
  )
}

export default Footer