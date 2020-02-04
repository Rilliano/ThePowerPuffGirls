import React from 'react'
import styled from 'styled-components'

// Types
import { IHeader } from '../types'

const Header: React.FC<IHeader> = ({ name, image }) => (
  <Container bgImg={image.original}>
    <InnerContainer>
      <Title>{name}</Title>
    </InnerContainer>
  </Container>
)

const InnerContainer = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Title = styled.h1`
  color: white;
  position: relative;
  z-index: 1;
`

const Container = styled.header<{ bgImg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex-direction: row;
  padding: 40px 20px;
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  position: relative;
  min-height: 300px;

  &:after {
    content: '';
    background-color: black;
    opacity: 0.7;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export default Header
