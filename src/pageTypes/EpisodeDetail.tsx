import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

// stateManagement
import { getSingleEpisode } from '../stateManagement/actions'
import { IAppState } from '../stateManagement/reducers'

// Types
import { IEpisode } from '../types'

// Components
import RichText from '../components/RichText'

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

  const getEpisode =
    episodeList.find((episode: IEpisode) => episode.id === episodeId) ||
    singleEpisodeList.find((episode: IEpisode) => episode.id === episodeId)

  useEffect(() => {
    if (getEpisode === undefined) {
      dispatch(getSingleEpisode(episodeId))
    }
  }, [dispatch, getEpisode])

  return (
    <Container>
      <InnerContainer>
        {getEpisode && (
          <>
            {getEpisode.name}
            {getEpisode.summary && <Summery text={getEpisode.summary} />}
          </>
        )}
      </InnerContainer>
    </Container>
  )
}

const mapStateToProps = (store: IAppState) => {
  return {
    episodeList: store.episodeListState.payload,
    singleEpisodeList: store.singleEpisodeListState.payload
  }
}

const Summery = styled(RichText)`
  margin-bottom: 20px;
`

const InnerContainer = styled.div`
  max-width: 900px;
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
