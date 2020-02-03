import React from 'react'

// Types
import { IEpisode } from '../types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IEpisodeListProps {
  title: string
  episodeList: IEpisode[]
}

const EpisodeList: React.FC<IEpisodeListProps> = ({ title, episodeList }) => (
  <Container>
    <Title>{title}</Title>

    <EpisodesList>
      {episodeList.map((episode: IEpisode) => (
        <EpisodeListItem key={episode.id}>
          <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
        </EpisodeListItem>
      ))}
    </EpisodesList>
  </Container>
)

const Container = styled.div``

const EpisodesList = styled.ul`
  margin: 0;
  padding: 0;
`

const EpisodeListItem = styled.li``

const Title = styled.h2`
  margin: 0 0 40px;
`

export default EpisodeList
