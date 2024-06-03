'use client'
import React from 'react'
import styled from 'styled-components'
import ti from '../assets/images/testimonial image.png'
import Image from 'next/image'
import tg from '../assets/images/testimonal givers.png'

export default function Testimonial() {
  return (
    <Container>
        <header>
            <p className='small-h'>testimonial</p>
            <p className='big-h' style={{margin: 0}}>what our users say about us?</p>
        </header>
        <main>
            <Image src={ti} alt='ti' height={713} width={713} />
            <ul>
                <li>
                    <p className='medium-h'>the best financial accounting app ever!</p>
                    <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                </li>
                <Image src={tg} alt='tg' height={40} width={192} />
                <p>nick jonas</p>
            </ul>
        </main>
    </Container>
  )
}

const Container=styled.div`
    padding: 0 127.5px;
    margin-bottom: 68px;
    header {
        text-align: center;
    }
    main {
        display: flex;
        img{
            margin-right: 30px;
        }
        ul {
            margin-top: 125px;
            img {
                margin: 24px 0;
            }
            p:nth-child(3){
                font-size: 18px;
                line-height: 28px;
                font-family: 'ClashDisplay-Semibold';
                text-transform: capitalize;
            }
        }
    }
`