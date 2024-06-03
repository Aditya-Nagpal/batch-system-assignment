'use client'
import React from 'react'
import styled from 'styled-components'
import fire from '../assets/images/fire.png'
import ulfry from '../assets/images/ulfry logo.png'
import Image from 'next/image'
import '../assets/css/clash-display.css'
import Link from 'next/link'

export default function Header() {
  return (
    <Container>
      <section>
        <div id='logo'>
          <Image src={fire} alt='fire' width={34} height={34} />
          <Image src={ulfry} alt='ulfry' width={65.78} height={29.26} />
          <p style={{height: '34px'}}>&trade;</p>
        </div>
        <ul id='header-list'>
          <li><a href='/'>home</a></li>
          <li><a href='/about-us'>about us</a></li>
          <li><a href='/pricing'>pricing</a></li>
          <li><Link href='#features'>features</Link></li>
        </ul>
      </section>
      <section>
        <button className='btn'>Download</button>
      </section>
    </Container>
  )
}

const Container=styled.div`
  width: 78.125%;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-between;
  section:first-child{
    display: flex;
    align-items: center;
    #logo{
      display: flex;
      align-items: flex-end;
      margin-right: 40px;
      img:first-child{
        margin-right: 6px;
      }
    }
    #header-list {
      li {
        display: inline-block;
        font-family: ClashDisplay-Medium;
        font-size: 20px;
        margin-right: 24px;
        text-transform: capitalize;
      }
      li:hover{
        color: #FF5555;
      }
    }
  }
`;
