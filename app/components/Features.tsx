'use client'
import React from 'react'
import styled from 'styled-components'
import fi from '../assets/images/features image.png'
import Image from 'next/image';
import '../assets/css/clash-display.css'
import star from '../assets/images/star-05.png'
import cube2 from '../assets/images/cube-02.png'
import cube3 from '../assets/images/cube-04.png'

export default function Features() {
  return (
    <Container id='features'>
        <Image src={fi} alt='fi' height={719.49} width={719.49} />
        <div>
            <p className='small-h'>features</p>
            <p className='big-h'>uifry premium</p>
            <ul>
                <li>
                    <Image src={star} alt='star' />
                    <span>budgeting intervals</span>
                    <p className='para' style={{marginTop: '12px'}}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </li>
                <li>
                    <Image src={cube2} alt='star' />
                    <span>budgeting intervals</span>
                    <p className='para' style={{marginTop: '12px'}}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </li>
                <li>
                    <Image src={cube3} alt='star' />
                    <span>budgeting intervals</span>
                    <p className='para' style={{marginTop: '12px'}}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </li>
            </ul>
        </div>
    </Container>
  )
}

const Container=styled.div`
    padding: 0 46px 0 110px;
    display: flex;
    div{
        margin-top: 128px;
        ul {
            li{
                margin-bottom: 32px;
                img {
                    margin-right: 8px;
                    display: inline-block;
                }
                span {
                    text-transform: capitalize;
                    font-family: 'ClashDisplay-Semibold';
                }
            }
        }
    }
`;
