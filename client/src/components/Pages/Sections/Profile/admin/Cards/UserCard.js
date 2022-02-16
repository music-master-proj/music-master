import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Col, } from 'react-bootstrap';

export const UserCard = ({ user }) => {
  return (
    <Col xs='auto' className='my-md-4 my-sm-2 my-1'>
      <Card className='border border-secondary' style={{ width: '19rem', height: '20rem' }}>
        <Card.Img className='card-img-top' style={{ width: 'auto', height: '12rem' }} src={`${process.env.REACT_APP_IMAGE_DOMAIN}/${user.image}`} alt='Card  cap' />
        <Card.Body>
          <Card.Title ><span className='fw-bolder text-capitalize'>Name: </span> {user.name}</Card.Title>
          <Card.Text ><span className='fw-bolder text-capitalize'>Gender: </span> {user.gender}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={{
            pathname: `/userPlaylists`,
            state: user._id
          }} className='text-decoration-none'>Show Playlists</Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};