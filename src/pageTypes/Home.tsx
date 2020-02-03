import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'

// stateManagement
import { IMainInfo } from '../stateManagement/reducers/mainInfoReducer'
import { getEpisodeList } from '../stateManagement/actions'
import { IAppState } from '../stateManagement/reducers'

// Components
import RichText from '../components/RichText'
import EpisodeList from '../components/EpisodeList'

// Types
import { IEpisode } from '../types'

interface IHomeProps {
  mainInfo: IMainInfo | undefined
  episodeList: IEpisode[]
}

const Home: React.FC<IHomeProps> = ({ mainInfo, episodeList }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (episodeList.length < 1) {
      dispatch(getEpisodeList())
    }
  }, [dispatch, episodeList.length])

  return (
    <Container>
      {mainInfo && (
        <InnerContainer>
          <Summery text={mainInfo.summary} />
          {episodeList && (
            <EpisodeList title="Episode List" episodeList={episodeList} />
          )}
        </InnerContainer>
      )}
    </Container>
  )
}

const mapStateToProps = (store: IAppState) => {
  return {
    mainInfo: store.mainInfoState.payload,
    episodeList: store.episodeListState.payload
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

export default connect(mapStateToProps)(Home)
