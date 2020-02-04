import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Types
import { IEpisode } from '../types'

interface IEpisodeListProps {
  title: string
  episodeList: IEpisode[]
}

const EpisodeList: React.FC<IEpisodeListProps> = ({ title, episodeList }) => (
  <>
    <Title>{title}</Title>
    <EpisodesList>
      {episodeList.map((episode: IEpisode) => (
        <EpisodeListItem key={episode.id}>
          <StyledLink to={`/episode/${episode.id}`}>
            {episode.image && <Image bgImg={episode.image.medium} />}
            <TextContainer>
              <ShowTitle>Show: {episode.name}</ShowTitle>
              <MetaData>
                Season: {episode.season} | Number: {episode.number}
              </MetaData>
            </TextContainer>
          </StyledLink>
        </EpisodeListItem>
      ))}
    </EpisodesList>
  </>
)

const MetaData = styled.span`
  color: black;
`

const ShowTitle = styled.h3`
  color: pink;
  margin-top: 0;
  margin-bottom: 10px;
`

const TextContainer = styled.div`
  padding: 16px 0;
`

const Image = styled.div<{ bgImg: string }>`
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
  background-position: top center;
  margin-right: 30px;
`

const EpisodesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const EpisodeListItem = styled.li`
  margin: 0 0 2px;
`

const Title = styled.h2`
  margin: 0 0 40px;
`

const StyledLink = styled(Link)`
  background-color: white;
  padding: 20px;
  display: flex;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: lightgrey;
  }
`

export default EpisodeList
