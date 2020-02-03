import React from 'react'
import { IHeader } from '../types'
import styled from 'styled-components'

const Header: React.FC<IHeader> = ({ name, image }) => (
  <Container>
    <InnerContainer>
      <Title>{name}</Title>
      <ImageContainer>
        <Image src={image.original} />
      </ImageContainer>
    </InnerContainer>
  </Container>
)

const InnerContainer = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const Title = styled.h1`
  color: white;
`

const ImageContainer = styled.div`
  display: flex;
`

const Image = styled.div<{ src: string }>`
  background-image: ${({ src }) => src && `url('${src}')`};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-size: cover;
  background-position: top center;
`

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex-direction: row;
  padding: 40px 20px;
`

export default Header
