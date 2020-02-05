import React from 'react'
import styled from 'styled-components'

// Components
import RichText from './RichText'

// Styles
import { mq } from '../styles/mediaQueries'
import { white } from '../styles/colors'

// Types
import { ISummaryBlock } from '../types'

const SummaryBlock: React.FC<ISummaryBlock> = ({
  title,
  description,
  imageSrc
}) => (
  <>
    <Title>{title}</Title>
    <SummaryContainer>
      {description && <Summary text={description} />}
      {imageSrc && (
        <ImageContainer>
          <Image src={imageSrc} />
        </ImageContainer>
      )}
    </SummaryContainer>
  </>
)

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 100%;
`
const Summary = styled(RichText)`
  line-height: 1.6;
  margin: 0 0 30px;

  ${mq.from.breakpoint.M`
    margin: 0 30px 0;
  `}
`

const ImageContainer = styled.div`
  display: flex;
`

const SummaryContainer = styled.div`
  background-color: ${white};
  width: 100%;
  padding: 20px;
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  align-items: center;

  ${mq.from.breakpoint.M`
    flex-direction: row;
    justify-content: space-between;
  `}
`

const Image = styled.div<{ src: string }>`
  background-image: ${({ src }) => src && `url('${src}')`};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-size: cover;
  background-position: top center;
`

export default SummaryBlock
