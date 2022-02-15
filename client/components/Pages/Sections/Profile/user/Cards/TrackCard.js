import * as React from 'react';
import { Card, Col } from "react-bootstrap";
import { YoutubeFrame } from '../../../../../Utils/YoutubeFrame';

export const TrackCard = ({ song }) => {
  const { snippet, id } = song;
  const { title, thumbnails } = snippet;
  return (
    <Col xs='auto' className='p-3'>
      <Card className='border border-primary' style={{ width: '19rem', height: '22rem' }}>
        {(id && id.videoId) ?
          <YoutubeFrame videoId={id.videoId} /> :
          <Card.Img className='card-img-left' src={thumbnails.medium.url} alt='Generic Placeholder Image' />
        }<Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};