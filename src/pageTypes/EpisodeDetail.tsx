import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

// StateManagement
import { getSingleEpisode } from '../stateManagement/actions'
import { IAppState } from '../stateManagement/reducers'

// Components
import SummaryBlock from '../components/SummaryBlock'

// Styles
import { maxWidth } from '../styles/grid'

// Types
import { IEpisode } from '../types'

interface IMatchParams {
  id: string
}

interface IEpisodeDetailProps extends RouteComponentProps<IMatchParams> {
  episodeList: IEpisode[]
  singleEpisodeList: IEpisode[]
}

const EpisodeDetail: React.FC<IEpisodeDetailProps> = ({
  episodeList,
  match,
  singleEpisodeList
}) => {
  const episodeId = Number(match.params.id)
  const dispatch = useDispatch()

  // Get Episode data from the episodeList or from the singleEpisodeList in the Redux store
  const getEpisode =
    episodeList.find((episode: IEpisode) => episode.id === episodeId) ||
    singleEpisodeList.find((episode: IEpisode) => episode.id === episodeId)

  useEffect(() => {
    // If there is no episode found in the episodeList or singleEpisodeList dispatch an action to get the single episode
    // NOTE there is no need to fetch the whole episode list, because that is a performace/bandwidth waste
    if (getEpisode === undefined) {
      dispatch(getSingleEpisode(episodeId))
    }
  }, [dispatch, getEpisode, episodeId])

  return (
    <Container>
      <InnerContainer>
        {getEpisode && (
          <SummaryBlock
            title={`Episode: ${getEpisode.name}`}
            description={getEpisode.summary}
            imageSrc={getEpisode.image && getEpisode.image.original}
          />
        )}
      </InnerContainer>
    </Container>
  )
}

const mapStateToProps = (store: IAppState) => ({
  episodeList: store.episodeListState.payload,
  singleEpisodeList: store.singleEpisodeListState.payload
})

const InnerContainer = styled.div`
  max-width: ${maxWidth}px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 40px 20px;
`

export default connect(mapStateToProps)(EpisodeDetail)
