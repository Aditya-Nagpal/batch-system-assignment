'use client'
import React from 'react'
import styled from 'styled-components'
import ai from '../assets/images/advantages image.png'
import Image from 'next/image'
import bell from '../assets/images/bell.png'
import ai2 from '../assets/images/adv-img-2.png'
import star2 from '../assets/images/star2.png'

export default function Advantages() {
  return (
    <>
        <Container>
            <div>
                <p className='small-h'>advantages</p>
                <p className='big-h'>why choose Uifry?</p>
                <ul>
                    <li>
                        <Image src={bell} alt='bell' />
                        <span className='medium-h'>why choose Uifry?</span>
                        <p className='para'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </li>
                </ul>
            </div>
            <Image src={ai} alt='ai' height={719.49} width={719.49} />
        </Container>
        <Container style={{paddingLeft: '48px',paddingRight: '201px'}}>
            <Image src={ai2} alt='ai2' height={719.49} width={719.49} />
            <div>
                <ul>
                    <li>
                        <Image src={star2} alt='star' />
                        <span className='medium-h'>fully customizable</span>
                        <p className='para'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </li>
                </ul>
            </div>
        </Container>
    </>
  )
}

const Container=styled.div`
    display: flex;
    padding-left: 175px;
    align-items: center;
    div {
        ul{
            li{
                img{
                    margin-right: 15px;
                    display: inline-block;
                }
                p {
                    margin-top: 23px;
                }
            }
        }
    }
`;