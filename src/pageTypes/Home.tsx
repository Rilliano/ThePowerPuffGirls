import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'

// StateManagement
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
          <Title>Show: {mainInfo.name}</Title>
          <SummeryContainer>
            <Summery text={mainInfo.summary} />
            <ImageContainer>
              <Image src={mainInfo.image.original} />
            </ImageContainer>
          </SummeryContainer>
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

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`
const Summery = styled(RichText)`
  line-height: 1.6;
  margin-right: 30px;
`

const ImageContainer = styled.div`
  display: flex;
`

const SummeryContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
`

const Image = styled.div<{ src: string }>`
  background-image: ${({ src }) => src && `url('${src}')`};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-size: cover;
  background-position: top center;
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
