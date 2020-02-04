import React from 'react'
import styled from 'styled-components'

// Types
import { IHeader } from '../types'

// Styles
import { white, black } from '../styles/colors'
import { maxWidth } from '../styles/grid'
import { mq } from '../styles/mediaQueries'

const Header: React.FC<IHeader> = ({ name, image }) => (
  <Container bgImg={image.original}>
    <InnerContainer>
      <Title>{name}</Title>
    </InnerContainer>
  </Container>
)

const InnerContainer = styled.div`
  max-width: ${maxWidth}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Title = styled.h1`
  color: ${white};
  position: relative;
  z-index: 1;

  ${mq.from.breakpoint.M`
    font-size: 56px;
    line-heihgt: 64px;
  `}
`

const Container = styled.header<{ bgImg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${black};
  flex-direction: row;
  padding: 40px 20px;
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  position: relative;
  min-height: 200px;

  ${mq.from.breakpoint.M`
    min-height: 300px;
  `}

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
