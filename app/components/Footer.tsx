'use client'
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import fire from '../assets/images/fire.png'
import ulfry from '../assets/images/ulfry logo.png'
import env from '../assets/images/envolpe.png'
import phone from '../assets/images/phone.png'

export default function Footer() {
  return (
    <Container>
        <ul id='contacts'>
            <li>
            <Image src={fire} alt='fire' width={34} height={34} />
            <Image src={ulfry} alt='ulfry' width={65.78} height={29.26} />
            <p style={{height: '34px'}}>&trade;</p>
            </li>
            <li>
                <Image src={env} alt='envolpe' />
                <span className='content'>help@frybix.com </span>
            </li>
            <li>
                <Image src={phone} alt='phone' />
                <span className='content'>+1 234 456 678 89</span>
            </li>
        </ul>
        <ul>
            <li className='head'>links</li>
            <li className='content'>home</li>
            <li className='content'>about us</li>
            <li className='content'>bookings</li>
            <li className='content'>blog</li>
        </ul>
        <ul>
            <li className='head'>legal</li>
            <li className='content'>terms of use</li>
            <li className='content'>privacy policy</li>
            <li className='content'>cookie policy</li>
        </ul>
        <ul>
            <li className='head'>product</li>
            <li className='content'>take tour</li>
            <li className='content'>live chat</li>
            <li className='content'>reveiws</li>
        </ul>
        <ul>
            <li className='head'>newsletter</li>
            <li className='content'>Stay up to date</li>
            <form id='newsletter-form'>
                <input type='email' className='content' placeholder='Your Email' />
                <input type='submit' value='Subscribe' />
            </form>
        </ul>
    </Container>
  )
}

const Container=styled.div`
    display: flex;
    margin-top: 155px;
    padding-left: 201px;
    ul{
        margin-right: 65px;
        li{
            margin-bottom: 16px;
        }
    }
    #contacts{
        li{
            display: flex;
            align-items: flex-end;
            img:first-child{
                margin-right: 6px;
            }
        }
    }
    .head{
        text-transform: capitalize;
        font-size: 32px;
        line-height: 42px;
        font-family: 'ClashDisplay-Medium';
    }
    .content{
        text-transform: capitalize;
        font-size: 16px;
        line-height: 26px;
        font-family: 'ClashDisplay-Medium';
    }
    #newsletter-form{
        font-family: 'ClashDisplay-Medium';
        input{
            border-radius: 4px;
            height: 61px;
            width: 160px;
        }
        input[type=email]{
            color: #81848A;
            padding-left: 17px;
        }
        input[type=submit]{
            background-color: black;
            color: white;
        }
    }
`;