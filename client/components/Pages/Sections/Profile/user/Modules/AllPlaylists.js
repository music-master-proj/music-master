import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlaylistEditForm from '../../PlaylistEditForm'

function AllPlaylists({ playlists, user, playlistHandler }) {
  return (
    <Container fluid>
      <h3 className='text-black fw-bolder'>Your Playlists</h3>
      <Row className='justify-content-center'>
        {playlists.map((playlist, idx) => (
          <React.Fragment key={idx}>
            <Col xs='auto'>
              <PlaylistEditForm playlist={playlist} user={user} playlistHandler={playlistHandler} />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  )
}

export default AllPlaylists