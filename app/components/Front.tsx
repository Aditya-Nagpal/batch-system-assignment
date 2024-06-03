'use client'
import React from 'react'
import styled from 'styled-components'
import '../assets/css/clash-display.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import ellipse from '../assets/images/ellipse.png'
import arrow from '../assets/images/arrow.png'
import front_image from '../assets/images/Front image.png'
import iphone1 from '../assets/images/iPhone-13-Pro-1.png'
import iphone2 from '../assets/images/iPhone-13-Pro-2.png'
import iphone3 from '../assets/images/iPhone-13-Pro-3.png'
import rings from '../assets/images/rings.png'
import Image from 'next/image';

export default function Front() {
  return (
    <Container>
        <section>
            <div id='bg-div'>
                <Image src={ellipse} alt='ellipse' />
            </div>
            <p>make the best financial decisions</p>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div>
                <button className='btn'>get started<Image src={arrow} alt='arrow' width={24} /></button>
                <button className='btn'><FaRegCirclePlay />watch video</button>
            </div>
            <Image src={front_image} alt='front image' />
        </section>
        <section>
            <Image src={iphone1} alt='i1' width={249.25} height={504.32} />
            <Image src={iphone2} alt='i2' width={249.25} height={504.32} />
            <Image src={iphone3} alt='i3' width={249.25} height={504.32} />
            <Image src={rings} alt='rings' width={725.49} height={725.49} />
        </section>
    </Container>
  )
}

const Container=styled.div`
    display: flex;
    padding-left: 175px;
    section:first-child {
        #bg-div {
            position: absolute;
            top: -63px;
            left: 48px;
        }
        position: relative;
        width: 618px;
        p{
            position: relative;
        }
        p:nth-child(2){
            margin: 115px 0 24px;
            line-height: 64px;
            text-transform: capitalize;
            font-size: 64px;
            font-family: 'ClashDisplay-Bold';
        }
        p:nth-child(3){
            font-family: 'ClashDisplay-Medium';
            font-size: 18px;
            line-height: 28px;
            opacity: 0.5;
            margin-bottom: 24px;
        }
        div:nth-child(4){
            display: flex;
            margin-bottom: 16.75px;
            button:first-child{
                margin-right: 40px;
                img{
                    margin-left: 8px;
                }
            }
            button:nth-child(2){
                background-color: transparent;
                color: black;
                svg {
                    margin-right: 14px;
                    height: 29px;
                    width: 29px;
                }
            }
        }
        img:nth-child(5){
            margin-left: -34px;
        }
    }
    section:nth-child(2){
        img {
            position: absolute;
            height: 624px;
            width: 477px;
        }
        img:first-child{
            z-index: 3;
            top: 180.51px;
            left: 771px;
        }
        img:nth-child(2){
            z-index: 2;
            top: 257.6px;
            left: 893px;
        }
        img:nth-child(3){
            z-index: 1;
            top: 308.02px;
            left: 964px;
        }
        img:nth-child(4){
            height: 725.49px;
            width: 725.49px;
            top: 118px;
        }
    }
`;
