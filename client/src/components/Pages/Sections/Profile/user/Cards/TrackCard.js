import * as React from 'react';
import { Card, Col } from "react-bootstrap";

export const TrackCard = ({ song }) => {
  const { snippet } = song;
  const { title, thumbnails } = snippet;
  return (
    <Col xs='auto' className='p-3'>
      <Card className='border border-primary' style={{ width: '19rem', height: '18rem' }}>
        <Card.Img className='card-img-top' src={thumbnails.medium.url} alt='Card cap' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};