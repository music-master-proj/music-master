import React from 'react';
import { Card, Col, ListGroup, ProgressBar } from 'react-bootstrap';

export const ArtistCard = () => {
  return (
    <Col className='p-3'>
      <Card className='border border-primary' style={{ width: '19rem' }}>
        <Card.Img className='card-img-top' src='' alt='Card  cap' />
        <Card.Body>
          <Card.Title>Top Artist-name</Card.Title>
          <Card.Text>number of -followers</Card.Text>
        </Card.Body>
        <ListGroup variant='flush'>
          <ListGroup.Item className='p-3'>
            <div className=' progress'>
              <ProgressBar className='progress-bar' variant='info' min={0} max={100} now={20} active='true'>Popularity</ProgressBar>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer><a href='/' className='card-link'>Spotify page</a></Card.Footer>
      </Card>
    </Col>
  );
};