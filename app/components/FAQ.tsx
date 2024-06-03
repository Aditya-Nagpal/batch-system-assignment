'use client'
import React from 'react'
import styled from 'styled-components'

export default function FAQ() {
  return (
    <Container>
        <p className='small-h'>faq</p>
        <p className='big-h'>Frequently asked questions</p>
        <ul>
            <li className='red-li'>
                <p className='medium-h'>the best financial accounting app ever!</p>
                <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </li>
            <li>
                <p className='medium-h'>the best financial accounting app ever!</p>
                <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </li>
            <li>
                <p className='medium-h'>the best financial accounting app ever!</p>
                <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </li>
            <li className='red-li'>
                <p className='medium-h'>the best financial accounting app ever!</p>
                <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </li>
            <li className='red-li'>
                <p className='medium-h'>the best financial accounting app ever!</p>
                <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </li>
            <li>
                <p className='medium-h'>the best financial accounting app ever!</p>
                <p className='para'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </li>
        </ul>
    </Container>
  )
}

const Container=styled.div`
    padding: 0 201px 0 201px;
    .big-h{
        max-width: 497px;
    }
    ul{
        .red-li{
            background-color: #FF5555;
            color: white;
        }
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            height: 181px;
            width: 49%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 8px;
            margin-bottom: 22px;
            p{
                max-width: 84%;
            }
            .para{
                margin-top: 8px;
            }
        }
    }
`;
