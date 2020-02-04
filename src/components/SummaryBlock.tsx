import React from 'react'
import styled from 'styled-components'

// Components
import RichText from './RichText'

interface ISummaryBlockProps {
  title: string
  description?: string
  imageSrc?: string
}

const SummaryBlock: React.FC<ISummaryBlockProps> = ({
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
`
const Summary = styled(RichText)`
  line-height: 1.6;
  margin-right: 30px;
`

const ImageContainer = styled.div`
  display: flex;
`

const SummaryContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  margin-bottom: 60px;
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
