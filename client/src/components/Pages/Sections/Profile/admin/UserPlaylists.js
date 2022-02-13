import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { APIHEADERS } from '../../../../../Config';
import { fetchAPI } from '../../../../Utils/HelperFunctions';
import { PlaylistCard } from './Cards/PlaylistCard'
import { useHistory, useLocation, } from "react-router-dom";
import Loader from '../../../../Utils/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, } from '@fortawesome/free-solid-svg-icons'

function UserPlaylists() {
  const location = useLocation();
  const
    history = useHistory(),
    initState = {
      loading: false,
      error: false,
      message: '',
      playlists: [],
    },
    [state, setState] = useState(initState);
  if (!location.state) history.push('/profile')
  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })
    fetchAPI(`playlist/list/${location.state}`, APIHEADERS(), null, 'GET')
      .then(response => {
        setState({
          loading: false,
          error: false,
          message: response.message,
          playlists: response.data,
        })
      }).catch(error => {
        console.log(error)
        setState({
          loading: false,
          error: true,
          message: error.message,
          playlists: [],
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let { loading, error, message, playlists } = state;
  return (
    <>
      {loading ? <Loader /> : error ?
        (<h4 className='text-danger'>{message}</h4>) : playlists.length < 1 ?
          (<h3 className=' align-self-center text-danger text-center'>No Playlist for the Selected User</h3>) : (
            <>
              <Row className='justify-content-center'>
                {playlists.map((playlist, idx) => (
                  <React.Fragment key={idx}>
                    <PlaylistCard playlist={playlist} />
                  </React.Fragment>
                ))}
              </Row>
              <Row className='justify-content-center mt-5'>
                <Col xs='auto'>
                  <Button variant='primary' size='lg' onClick={() => history.push('/profile')}>
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