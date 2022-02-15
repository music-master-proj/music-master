import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { RecommendedArtistCard } from "../Cards/RecommendedArtistCard";
import '../Styles/cardStyles.scss'

function RecommendedArtists({ songs }) {
  return (
    <section>
      <Row><h2>Recommended Artists</h2></Row>
      <Row><h5>Add all time, currently?</h5></Row>
      <Container fluid>
        <Row className=' justify-content-center'>
          {songs.map(song => <RecommendedArtistCard song={song} key={song.etag} />)}
        </Row>
      </Container>
    </section>
  );
}

export default RecommendedArtists;
