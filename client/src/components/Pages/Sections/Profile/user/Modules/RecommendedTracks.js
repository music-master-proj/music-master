import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { RecommendedTrackCard } from '../Cards/RecommendedTrackCard';
import '../Styles/cardStyles.scss'

function RecommendedTracks({ songs }) {
  return (
    <section>
      <Row><h2>Recommended Tracks</h2></Row>
      <Row><h5>Add all time, currently?</h5></Row>
      <Container fluid>
        <Row className=' justify-content-center'>
          {songs.map(song => <RecommendedTrackCard song={song} key={song.etag} />)}
        </Row>
      </Container>
    </section>
  );
}

export default RecommendedTracks;
