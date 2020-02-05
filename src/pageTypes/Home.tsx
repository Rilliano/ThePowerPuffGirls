import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'

// StateManagement
import { IMainInfo } from '../stateManagement/reducers/mainInfoReducer'
import { getEpisodeList } from '../stateManagement/actions'
import { IAppState } from '../stateManagement/reducers'

// Components
import EpisodeList from '../components/EpisodeList'
import SummaryBlock from '../components/SummaryBlock'

// Styles
import { maxWidth } from '../styles/grid'

// Types
import { IEpisode } from '../types'

interface IHomeProps {
  mainInfo: IMainInfo | undefined
  episodeList: IEpisode[]
}

const Home: React.FC<IHomeProps> = ({ mainInfo, episodeList }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // First check if there are items in the episodeList in the redux store, If the list is empty, dispatch the getEpisodeList action to fetch the episode list
    if (episodeList.length < 1) {
      dispatch(getEpisodeList())
    }
  }, [dispatch, episodeList.length])

  return (
    <Container>
      {mainInfo && (
        <InnerContainer>
          <SummaryBlock
            title={`Show: ${mainInfo.name}`}
            description={mainInfo.summary}
            imageSrc={mainInfo.image && mainInfo.image.original}
          />
          {episodeList && (
            <EpisodeList title="Episode List" episodeList={episodeList} />
          )}
        </InnerContainer>
      )}
    </Container>
  )
}

const InnerContainer = styled.div`
  max-width: ${maxWidth}px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 40px 20px;
`

const mapStateToProps = (store: IAppState) => {
  return {
    mainInfo: store.mainInfoState.payload,
    episodeList: store.episodeListState.payload
  }
}

export default connect(mapStateToProps)(Home)
