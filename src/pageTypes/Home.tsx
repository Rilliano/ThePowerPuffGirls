import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

// stateManagement
import { IMainInfo } from '../stateManagement/reducers/mainInfoReducer'
import { IEpisode } from '../stateManagement/reducers/episodeListReducer'
import { getEpisodeList } from '../stateManagement/actions'
import { IAppState } from '../stateManagement/reducers'
import styled from 'styled-components'
import RichText from '../components/RichText'

interface IProps {
  mainInfo: IMainInfo | undefined
  episodeList: IEpisode[]
}

const Home: React.FC<IProps> = ({ mainInfo, episodeList }) => {
  console.log('episodeList', episodeList)

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
          {/* <header className="App-header">
            {mainInfo.image && (
              <img
                src={mainInfo.image.medium}
                className="App-logo"
                alt="logo"
              />
            )}
            {mainInfo.name}
            <br />
            <br />
            {mainInfo.summary}
          </header> */}
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
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 40px 20px;
`

export default connect(mapStateToProps)(Home)
