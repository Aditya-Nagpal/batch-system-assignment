'use client'
import React from 'react'
import di from '../assets/images/download app.png'
import styled from 'styled-components'
import Image from 'next/image';

export default function DownloadApp() {
  return (
    <Container>
        <Image src={di} alt='di' />
    </Container>
  )
}

const Container=styled.div`
    padding-left: 201px;
    img{
        margin-top: 133px;
    }
`;