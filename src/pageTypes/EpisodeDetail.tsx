import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect, useDispatch } from 'react-redux'
import { RouteComponentProps, Link } from 'react-router-dom'

// StateManagement
import { getSingleEpisode } from '../stateManagement/actions'
import { IAppState } from '../stateManagement/reducers'

// Components
import SummaryBlock from '../components/SummaryBlock'

// Styles
import { maxWidth } from '../styles/grid'

// Utils
import { addZeroBeforeSingleDigit } from '../utils'

// Types
import { IEpisode } from '../types'
import { white, black, pink } from '../styles/colors'
import { transitions } from '../styles/animations'

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
            title={`S${addZeroBeforeSingleDigit(
              getEpisode.season
            )}E${addZeroBeforeSingleDigit(getEpisode.number)}: ${
              getEpisode.name
            }`}
            description={getEpisode.summary}
            imageSrc={getEpisode.image && getEpisode.image.original}
          />
        )}

        <HomeBtn to="/">Go To Home</HomeBtn>
      </InnerContainer>
    </Container>
  )
}

const HomeBtn = styled(Link)`
  display: inline-block;
  padding: 20px 50px;
  color: ${white};
  font-weight: bold;
  border-radius: 20px;
  background-color: ${pink};
  transition: color ${transitions.fast}, background-color ${transitions.fast};

  &:hover {
    color: ${black};
    background-color: ${white};
  }
`

const InnerContainer = styled.div`
  max-width: ${maxWidth}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const mapStateToProps = (store: IAppState) => ({
  episodeList: store.episodeListState.payload,
  singleEpisodeList: store.singleEpisodeListState.payload
})

export default connect(mapStateToProps)(EpisodeDetail)
