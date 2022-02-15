import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Col, } from 'react-bootstrap';

export const PlaylistCard = ({ playlist }) => {
  let noImage = 'assets/images/music_master_frame.jpg';
  let imageSrc = playlist && playlist.songs.length > 0 ? playlist.songs[0].snippet?.thumbnails.medium?.url || noImage : noImage;
  return (
    <Col xs='auto'>
      <Card className='border border-secondary' style={{ width: '19rem', height: '20rem' }}>
        <Card.Img className='card-img-top' style={{ width: 'auto', height: '12rem' }} src={imageSrc} alt='Playlist image' />
        <Card.Body>
          <Card.Title><span className=' fw-bolder'>Palylist Title: </span><span className='text-capitalize'>{playlist?.title || '' }</span></Card.Title>
          <Card.Text><span className=' fw-bolder'>Total Songs: </span>{playlist?.songs?.length || 0}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={{
            pathname: `/userSongs`,
            state: playlist
          }} className='text-decoration-none'>Show Songs</Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};