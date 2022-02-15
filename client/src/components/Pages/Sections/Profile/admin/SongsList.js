import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { TrackCard } from '../user/Cards/TrackCard'
import { useHistory, useLocation, } from "react-router-dom";
import Loader from '../../../../Utils/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, } from '@fortawesome/free-solid-svg-icons'

function UserPlaylists() {
  const location = useLocation();
  const
    history = useHistory(),
    initState = {
      loading: true,
      songsList: [],
    },
    [state, setState] = useState(initState);

  useEffect(() => {
    setState({
      ...state,
      loading: false,
      songsList: location.state.songs
    })
    if (!location.state.songs) history.push('/profile');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let { loading, songsList } = state;
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Row className='justify-content-center'>
            {songsList.map((song, idx) => (
              <React.Fragment key={idx}>
                <TrackCard song={song} />
              </React.Fragment>
            ))}
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col xs='auto'>
              <Button variant='primary' size='lg' onClick={() => history.push('/userPlaylists')}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Go Back
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default UserPlaylists